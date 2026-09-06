#!/usr/bin/env python3
"""Regenerate src/data/lunar-days.json from the iOS app, and print the derived counts
that /lunar-days quotes in prose so they can be diffed against what the page says.

    python3 scripts/build-lunar-days.py [--app <path to LunarCalendar-iOS26>]
"""
import argparse
import json
import pathlib
import re
import sys

REPO = pathlib.Path(__file__).resolve().parent.parent
DEFAULT_APP = REPO.parent.parent / "0E-extensions" / "LunarCalendar-iOS26"

ACTIVITY_NAMES = {
    "creative": "Creative work",
    "physical": "Physical work",
    "mental": "Mental work",
    "meditation": "Meditation",
    "sports": "Sports",
    "business": "Business",
    "learning": "Learning",
    "social": "Social",
}
# getDailyInsightKey: four days carry their own reading, the rest share three phase keys.
INSIGHT_DAYS = (1, 15, 23, 29)


def parse_recommendations(swift: str):
    body = swift[swift.index("private static let lunarDayData"):]
    days = {}
    for day_block in re.finditer(r"\n\s{8}(\d+):\s*\[(.*?)\n\s{8}\]", body, re.S):
        day = int(day_block.group(1))
        entries = re.findall(
            r"ActivityRecommendation\(type:\s*\.(\w+),\s*rating:\s*\.(\w+),\s*noteKey:\s*\"([^\"]+)\"\)",
            day_block.group(2),
        )
        if entries:
            days[day] = entries
    return days


def parse_strings(catalogue: dict):
    out = {}
    for key, entry in catalogue["strings"].items():
        unit = entry.get("localizations", {}).get("en", {}).get("stringUnit")
        if unit:
            out[key] = unit["value"]
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--app", type=pathlib.Path, default=DEFAULT_APP)
    args = ap.parse_args()
    src = args.app / "LunarCalendar"
    if not src.is_dir():
        sys.exit(f"app source not found at {src}")

    engine = (src / "Core/Services/RecommendationEngine.swift").read_text(encoding="utf-8")
    strings = parse_strings(
        json.loads((src / "Localization/Localizable.xcstrings").read_text(encoding="utf-8"))
    )
    data = parse_recommendations(engine)
    if sorted(data) != list(range(1, 31)):
        sys.exit(f"expected days 1-30, parsed {sorted(data)}")

    insight_keys = {
        d: f"insightDay{d}" if d in INSIGHT_DAYS
        else "insightWaxingPhase" if 2 <= d <= 14
        else "insightWaningPhase" if 16 <= d <= 22
        else "insightRestingPhase"
        for d in data
    }

    out, seen, pairs = [], set(), 0
    for day in range(1, 31):
        entries = data[day]
        pairs += len(entries)
        best = [
            {"key": t, "name": ACTIVITY_NAMES[t], "note": strings[k]}
            for t, r, k in entries if r == "highlyFavorable"
        ]
        avoid = [
            {"key": t, "name": ACTIVITY_NAMES[t], "note": strings[k]}
            for t, r, k in entries if r == "notRecommended"
        ]
        insight = strings[insight_keys[day]]
        # A band's reading is printed once, on the first day of the band. Day 30 shares the
        # resting key with 24-28, so it would otherwise repeat a line the reader has seen.
        show = insight not in seen
        seen.add(insight)
        out.append({
            "day": day,
            "insight": insight,
            "showInsight": show,
            "best": best,
            "fav": len([1 for _, r, _ in entries if r == "favorable"]),
            "avoid": avoid,
            "favCount": len(best),
            "even": not best and not avoid,
        })

    target = REPO / "src/data/lunar-days.json"
    target.write_text(json.dumps(out, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    cautions = [d for d in out if d["avoid"]]
    by_activity = {}
    for d in out:
        for a in d["avoid"]:
            by_activity[a["name"]] = by_activity.get(a["name"], 0) + 1
    top = {}
    for d in out:
        for b in d["best"]:
            top[b["name"]] = top.get(b["name"], 0) + 1

    print(f"wrote {target.relative_to(REPO)}")
    print("--- counts quoted in src/pages/lunar-days.astro ---")
    print(f"rated pairs: {pairs} (30 days x 8 activities)")
    print(f"cautions: {sum(len(d['avoid']) for d in out)} on {len(cautions)} days: "
          f"{[d['day'] for d in cautions]}")
    print(f"days flagging nothing: {30 - len(cautions)}")
    print(f"cautions by activity: {dict(sorted(by_activity.items(), key=lambda x: -x[1]))}")
    print(f"never cautioned: {sorted(set(ACTIVITY_NAMES.values()) - set(by_activity))}")
    print(f"top rated by activity: {dict(sorted(top.items(), key=lambda x: -x[1]))}")
    print(f"flat days: {[d['day'] for d in out if d['even']]}")
    print(f"most cautioned day: {max(out, key=lambda d: len(d['avoid']))['day']}")
    print(f"banded readings shown on days: {[d['day'] for d in out if d['showInsight']]}")


if __name__ == "__main__":
    main()
