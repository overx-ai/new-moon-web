#!/usr/bin/env python3
"""Regenerate src/data/lunar-days.json from the iOS app, and print the derived counts
that the lunar day pages quote in prose so they can be diffed against what the pages say.

    python3 scripts/build-lunar-days.py [--app <path to LunarCalendar-iOS26>] [--ref <git ref>]
"""
import argparse
import json
import pathlib
import re
import subprocess
import sys

REPO = pathlib.Path(__file__).resolve().parent.parent
DEFAULT_APP = REPO.parent.parent / "0E-extensions" / "LunarCalendar-iOS26"
# The site describes the build in App Store review, 1.0 (2), not the app's working tree.
# Master has since added four activity types that no submitted build carries yet; bump
# this ref when a build with them ships, and re-check every count the pages quote.
DEFAULT_REF = "7df59e4"
ENGINE = "LunarCalendar/Core/Services/RecommendationEngine.swift"
CATALOGUE = "LunarCalendar/Localization/Localizable.xcstrings"

LOCALES = ("en", "de")
# English keeps the short names /lunar-days has always printed; every other locale uses
# the app's own `activity_<key>` string.
NAME_OVERRIDES = {
    "en": {
        "creative": "Creative work",
        "physical": "Physical work",
        "mental": "Mental work",
        "meditation": "Meditation",
        "sports": "Sports",
        "business": "Business",
        "learning": "Learning",
        "social": "Social",
    },
}
# Reviewed site wording for app strings that read as literal translations. Each entry keeps
# the app text it replaces, so an app-side rewrite fails the build instead of being masked.
# Ratings never change, only wording; port these into the app catalogue when convenient.
OVERRIDES = {"de": pathlib.Path(__file__).with_name("lunar-days-overrides.de.json")}
# getDailyInsightKey: four days carry their own reading, the rest share three phase keys.
INSIGHT_DAYS = (1, 15, 23, 29)


def read(app: pathlib.Path, ref: str, path: str) -> str:
    if not ref:
        return (app / path).read_text(encoding="utf-8")
    return subprocess.run(
        ["git", "-C", str(app), "show", f"{ref}:{path}"],
        check=True, capture_output=True, text=True,
    ).stdout


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


def parse_strings(catalogue: dict, locale: str):
    out = {}
    for key, entry in catalogue["strings"].items():
        unit = entry.get("localizations", {}).get(locale, {}).get("stringUnit")
        if unit and unit.get("state") == "translated":
            out[key] = unit["value"]
    if locale in OVERRIDES:
        for key, o in json.loads(OVERRIDES[locale].read_text(encoding="utf-8")).items():
            if out.get(key) != o["app"]:
                sys.exit(f"{locale} override for {key} is stale: app now says {out.get(key)!r}")
            out[key] = o["site"]
    return out


def insight_key(day: int) -> str:
    if day in INSIGHT_DAYS:
        return f"insightDay{day}"
    if 2 <= day <= 14:
        return "insightWaxingPhase"
    if 16 <= day <= 22:
        return "insightWaningPhase"
    return "insightRestingPhase"


def build_locale(data, strings, locale):
    names = NAME_OVERRIDES.get(locale, {})

    def item(t, k):
        return {"key": t, "name": names.get(t) or strings[f"activity_{t}"], "note": strings[k]}

    out, seen = [], set()
    for day in range(1, 31):
        entries = data[day]
        best = [item(t, k) for t, r, k in entries if r == "highlyFavorable"]
        avoid = [item(t, k) for t, r, k in entries if r == "notRecommended"]
        key = insight_key(day)
        # A band's reading is printed once, on the first day of the band. Day 30 shares the
        # resting key with 24-28, so it would otherwise repeat a line the reader has seen.
        show = key not in seen
        seen.add(key)
        out.append({
            "day": day,
            "insight": strings[key],
            "showInsight": show,
            "best": best,
            "fav": len([1 for _, r, _ in entries if r == "favorable"]),
            "avoid": avoid,
            "favCount": len(best),
            "even": not best and not avoid,
        })
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--app", type=pathlib.Path, default=DEFAULT_APP)
    ap.add_argument("--ref", default=DEFAULT_REF, help="app git ref; empty for the working tree")
    args = ap.parse_args()
    if not (args.app / "LunarCalendar").is_dir():
        sys.exit(f"app source not found at {args.app}")

    data = parse_recommendations(read(args.app, args.ref, ENGINE))
    if sorted(data) != list(range(1, 31)):
        sys.exit(f"expected days 1-30, parsed {sorted(data)}")
    catalogue = json.loads(read(args.app, args.ref, CATALOGUE))

    try:
        out = {loc: build_locale(data, parse_strings(catalogue, loc), loc) for loc in LOCALES}
    except KeyError as e:
        sys.exit(f"missing translated string or activity name: {e}")

    target = REPO / "src/data/lunar-days.json"
    target.write_text(json.dumps(out, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    days = out["en"]
    pairs = sum(len(v) for v in data.values())
    cautions = [d for d in days if d["avoid"]]
    by_activity, top = {}, {}
    for d in days:
        for a in d["avoid"]:
            by_activity[a["key"]] = by_activity.get(a["key"], 0) + 1
        for b in d["best"]:
            top[b["key"]] = top.get(b["key"], 0) + 1
    activities = {t for v in data.values() for t, _, _ in v}

    print(f"wrote {target.relative_to(REPO)} ({', '.join(LOCALES)}) from ref {args.ref or 'working tree'}")
    print("--- counts quoted in the lunar day pages ---")
    print(f"rated pairs: {pairs} (30 days x {len(activities)} activities)")
    print(f"cautions: {sum(len(d['avoid']) for d in days)} on {len(cautions)} days: "
          f"{[d['day'] for d in cautions]}")
    print(f"days flagging nothing: {30 - len(cautions)}")
    print(f"cautions by activity: {dict(sorted(by_activity.items(), key=lambda x: -x[1]))}")
    print(f"never cautioned: {sorted(activities - set(by_activity))}")
    print(f"top rated by activity: {dict(sorted(top.items(), key=lambda x: -x[1]))}")
    print(f"flat days: {[d['day'] for d in days if d['even']]}")
    print(f"most cautioned day: {max(days, key=lambda d: len(d['avoid']))['day']}")
    print(f"banded readings shown on days: {[d['day'] for d in days if d['showInsight']]}")


if __name__ == "__main__":
    main()
