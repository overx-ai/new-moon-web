# Published pages

Search Console columns stay empty until the domain is verified and the site is live. Do not
fill them with estimates.

| URL | Keyword | Cluster | Published | Last review | Impr. | CTR | Pos. | Verdict | Next action |
|---|---|---|---|---|---|---|---|---|---|
| `/` | `lunar calendar app` | A | 2026-09-06 | 2026-09-07 | | | | new | retargeted to the lifestyle shoulder; verify SERP after launch |
| `/de` | `mondkalender` | A | 2026-09-06 | 2026-09-07 | | | | new | **priority page.** Content SERP: consider a de version of `/lunar-days` |
| `/es` | `calendario lunar` | A | 2026-09-06 | 2026-09-07 | | | | new | no web SERP verdict yet, ES search not available here |
| `/ru` | `лунный календарь` | A | 2026-09-06 | 2026-09-07 | | | | new | no web SERP verdict yet |
| `/fr` | none | A | 2026-09-06 | 2026-09-07 | | | | new | no Astro data for the FR store; translation only until measured |
| `/lunar-days` | `30 lunar days` | B | 2026-09-07 | 2026-09-07 | | | | new | request indexing at launch. **Only 2 inbound links** (`/` and `/support`), below the 3 to 5 the structure guide asks for. The site has 6 pages and the other 3 are legal, so a third honest inbound link does not exist yet. Revisit when cluster B grows |
| `/support` | brand | utility | 2026-09-06 | | | | | new, utility | |
| `/privacy` | required by Apple | utility | 2026-09-06 | | | | | new, utility | |
| `/terms` | required by Apple | utility | 2026-09-06 | | | | | new, utility | **blocked:** jurisdiction placeholder |

## Claims register

Every external or computed claim on a published page, with what backs it.

| Claim | Source | Supports |
|---|---|---|
| A lunar month runs about 29.5 days | `LunarCalendar/Core/Constants/LunarConstants.swift` | Synodic cycle constant 29.53058770576 days, and reference new moon 2000-01-06 18:14 UTC. Used on `/lunar-days` for the drift between lunar and calendar days |
| The mean lunar month is 29.53059 days, 29d 12h 44m, and varies by hours either side | https://earthsky.org/space/years-longest-shortest-lunar-month/ | Fetched 2026-09-07: "the lunar month has a mean period of 29.53059 days (29 days 12 hours and 44 minutes)" and 21st century extremes of 29d 19h 47m and 29d 6h 35m. The only external number on `/lunar-days`, cited inline. Agrees with our own constant to five decimals |
| 240 ratings across 30 lunar days and 8 activities | `LunarCalendar/Core/Services/RecommendationEngine.swift` | Parsed 2026-09-07: 30 day entries, 8 activity entries each, 240 total, none missing |
| 24 of the 240 ratings are cautions, on 8 days | Same file, counted | Days 13, 14, 15, 24, 25, 26, 27, 28 |
| Business cautioned on 8 days, sports 6, physical work 5 | Same file, counted | Business 8, Sports 6, Physical work 5, Mental work 2, Social 2, Learning 1 |
| Creative work and meditation are never cautioned | Same file, counted | Neither appears in any `notRecommended` entry |
| Meditation is top rated on 16 of 30 days | Same file, counted | `highlyFavorable` counts: Meditation 16, Creative 8, Learning 6, Mental 5, Business 5, Social 4, Physical 3, Sports 3 |
| Days 2, 6, 9, 10, 17 and 21 rate all eight activities favourable | Same file, counted | Each has 8 `favorable`, 0 `highlyFavorable`, 0 `notRecommended` |
| `src/data/lunar-days.json` | `scripts/build-lunar-days.py`, run against the app repo | Regenerate with `python3 scripts/build-lunar-days.py`. Every derived count quoted in the page prose is printed by the same script, so a change in the app shows up as a diff rather than as silently stale prose |
| Lunar day note text | `LunarCalendar/Localization/Localizable.xcstrings` | All 240 `dayN_activity_note` keys resolved in `en`, 2026-09-07 |
| A lunar day is about 23h 37m, and every lunar day is that same length | `LunarCalendar/Core/Services/LunarCalculator.swift` | `lunarDaySeconds = lunarCycleDays / 30.0 * 86400.0`, exactly periodic from the reference new moon. Its own comment reads "a lunar day is ~23h37m < 24h". 29.53059 / 30 = 0.98435 days confirms it. **A first draft said 24h 50m**, which is the tidal day (moonrise to moonrise), a different quantity, and it also reversed the drift direction. Corrected 2026-09-07. The tidal figure was then cut from the page entirely rather than cited, so the FAQ now gives only the 23h 37m and the drift it causes |
| Eight moon phases | `LunarCalendar/Core/Models/MoonPhase.swift` | Enum has exactly 8 cases, new moon through waning crescent. Stated on `/lunar-days` as what the app shows, not as an astronomical universal |
| ASO popularity and difficulty, four stores | Astro MCP, pulled 2026-09-07 | Underlying crawl dated 2026-08-25. See `keywords.md` for the full tables and the caveat |
| `lunar calendar app` is a product-page SERP | Web search, 2026-09-07 | Top ten was Apple and Google Play listings plus `jrustonapps.com` and `mooncalendarapp.com`. No listicles or forums |
| `mondkalender` is a content SERP | Web search, 2026-09-07 | Top ten led by `der-mond.de`, `mondinfo.de`, `mondkalender-online.de`, `jagdwetter.com`. **Caveat: the search tool is US-only**, so this surfaced German-language results but not a German-locale SERP |

## Claims deliberately dropped

| Claim | Why it was cut |
|---|---|
| "The twenty-ninth is the one day treated as unfavourable throughout" | Written from general lunar folklore, then checked. Day 29 carries **zero** cautions and one top rating, meditation. The draft was wrong and the sentence was replaced |
| "Cautions cluster on the fifteenth and the twenty-ninth" | Same check. They cluster on 13 to 15 and 24 to 28. Day 29 has none |
| "The 30th lunar day does not occur in every month" | Plausible and widely repeated, but nothing in our own source establishes it. Rewritten to what the cycle length does support |
| "Where most of our readers are", of the German market | **Hard fail in review, 2026-09-07.** The app has not shipped and has no readership at all. The nearest real datum is ASO keyword popularity, which `banned.md` already forbids presenting as web demand; presenting it as readership goes a step further. Cut entirely |
| "Over a month that walks the turnover through every hour of the clock" | The drift is about 22 minutes a day, so 11h 15m over a lunar month, under half the clock. Working round all 24 hours takes about two months. Replaced with the 11 hour figure |
| "The tidal day of 24 hours 50 minutes" | True, but no source on the page and not derivable from the one cited figure. Cut rather than cited, because the page never needs the quantity |
| "Because a lunar month runs about 29.5 days the 30th is often short or skipped entirely" | The same dropped claim, reintroduced in a FAQ answer on 2026-09-07 and caught in review. A dropped claim in `FAQPage` schema is worse than one in the body, because it is the version an engine quotes. First rewritten to "usually the short one", then cut too: `LunarCalculator.swift` divides the cycle into thirty **equal** slices, so the 30th is the same length as any other lunar day. The FAQ now says exactly that |
