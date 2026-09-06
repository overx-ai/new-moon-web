# Keyword backlog

## Provenance, and what is measured versus guessed

**App Store columns (`ASO pop`, `ASO diff`) are measured.** Pulled from the Astro MCP on
**2026-09-07** for the tracked app (temp id `100`, real id `6800363857`), per storefront.
Astro's own crawl of those figures is dated **2026-08-25**, so they are three weeks old at
the time of writing, not live. Both scales are 0 to 100. `pop 5` is the floor and means
"no measurable demand", not "a little demand".

**They move.** `lunar calendar` in the US read pop 14 in the 2026-08-17 study and reads 9
now. Re-pull before acting on any of it.

**`web SERP verdict` is a separate, weaker signal.** It comes from actually running the
query on 2026-09-07 and reading the top ten. The search tool available here is **US-only**,
so the English verdicts are real, the German one is indicative at best (German-language
results surfaced, but not from a German locale), and **es and ru have no web verdict at
all**. Do not present them as if they do.

**ASO popularity is not web search volume.** An App Store term tells you what people type
into the App Store. It is a proxy for intent, nothing more. Where the two disagree, the
SERP wins for a web page and the ASO number wins for the store listing.

`currentRanking` is 1000 (unranked) on every keyword in every store, because the app has
not shipped. There is no rank column here for that reason. Add one after launch.

---

## The finding that should drive everything

**English is the weakest market this app has**, by a wide margin.

| Store | Category head term | ASO pop | ASO diff | Apps competing |
|---|---|---:|---:|---:|
| de | `mondkalender` | **52** | 50 | 181 |
| es | `calendario lunar` | **44** | 44 | 212 |
| ru | `лунный календарь` | **32** | 49 | 244 |
| us | `lunar calendar` | **9** | 54 | 248 |

German has roughly five times the English demand at lower difficulty in a less crowded
field. The site currently treats English as the pillar and the other four locales as
translations of it. That is backwards.

The web SERPs say the same thing in a different way:

- **`lunar calendar app` (en) is a product-page query.** The top ten is Apple and Google
  Play listings plus two brand sites, `jrustonapps.com` and `mooncalendarapp.com`. No
  listicles, no editorial, no Reddit. A brand site can rank here, which is why the
  homepage is the right vehicle and no blog post is needed for it.
- **`mondkalender` (de) is a content query.** The top ten is dominated by content sites,
  not stores: `der-mond.de`, `mondinfo.de`, `mondkalender-online.de`, `jagdwetter.com`.
  `mondinfo.de` leads on **"Tagesempfehlungen"** and `mondkalender-online.de` on
  recommendations for daily life, health, garden and home. The German market already
  expects a moon calendar to tell it what the day is good for. That is our product.
- German moon-lifestyle publishing has an established mainstream anchor in the
  Paungger-Poppe books, which a competing App Store app licenses outright. The category is
  culturally normal there in a way it is not in the US.

**Consequence.** English competes on the lifestyle shoulder, not the astronomy head, and
German leads on daily recommendations rather than on phases.

---

## us — measured 2026-08-25

| keyword | cluster | intent | ASO pop | ASO diff | web SERP verdict | status |
|---|---|---|---:|---:|---|---|
| `lunar calendar app` | A pillar | product-page | 9 | 54 | **pillar target.** Store listings plus two brand sites, no listicles or Reddit. Brand sites do rank | **live at `/`** |
| `lucky days` | B | product-page | **25** | **23** | not checked | best US ratio. Matches the favourable/unfavourable framing exactly |
| `moon widget` | C | product-page | **22** | 48 | not checked | we genuinely ship three widgets |
| `spells` | D | informational | 19 | 45 | not checked | adjacent audience, off-positioning |
| `moon guide` | B | informational | **18** | **19** | not checked | strong ratio, maps to the 30-day page |
| `crystals` | D | informational | 18 | 37 | not checked | adjacent, off-positioning |
| `lunar phase` | A | informational | 18 | 51 | not checked | borderline |
| `biorhythm` | B | product-page | 16 | **13** | not checked | free win, and honest: the app is a cycle model |
| `energy tracker` | B | product-page | 15 | 23 | not checked | matches the energy-category colouring |
| `grimoire` | D | informational | 12 | 19 | not checked | cheap, off-positioning |
| `almanac` | B | informational | 9 | 17 | not checked | cheap |
| `30 lunar days` | B | informational | n/a | n/a | **crowded but gapped.** `lunarium.co.uk`, `moonsuncalendar.com`, `moonphasecalendar.org`, `astrologyk.com`, `moonhoroscope.com` all rank with **one thin page per day**. Nothing covers all 30 in one scannable place. Framing is esoteric (rituals, haircuts, diet) which we must not copy | **writing** |

### Contested: enter by combination, never target directly
`calendar widget` 31/61 · `manifestation` 28/45 · `moon phases` 27/62 · `full moon calendar`
23/64 · `moon phase calendar` 11/63 · `moon calendar` 9/72 · `moon phase` 8/68.

### Dead: high demand we would lose, and that misdescribes the app
`habit tracker` 67/67 · `astrology` 61/73 · `horoscope` 58/73 · `mood tracker` 53/60 ·
`daily planner` 48/72 · `zodiac` 9/66 · `moon sign` 9/62.

The last two are the useful evidence: `zodiac` and `moon sign` have almost no demand *and*
brutal difficulty. Chasing the astrology framing costs us the positioning and buys nothing.
We do not compute natal charts.

---

## de — measured 2026-08-25. The priority market.

| keyword | cluster | intent | ASO pop | ASO diff | apps | web SERP verdict | status |
|---|---|---|---:|---:|---:|---|---|
| `mondkalender` | A pillar | mixed | **52** | 50 | 181 | **content SERP, not a store SERP.** See above. The German page must do more than describe an app | **live at `/de`, needs retarget** |
| `kalender` | A | product-page | 72 | 67 | 210 | not checked | head term, combination fuel only |
| `tagebuch` | B | product-page | 60 | 50 | 228 | not checked | matches the Diary tab |
| `mond` | A | mixed | 46 | 60 | 217 | not checked | combination fuel |
| `mondphasen` | A | informational | 13 | 55 | 192 | not checked | |
| `biorhythmus` | B | product-page | 13 | **7** | 109 | not checked | free win |
| `vollmond` | A | informational | 6 | 39 | 100 | not checked | |
| `günstige tage` | B | informational | 5 | **12** | **3** | not checked | uncontested and it is literally our core feature |
| `aussaatkalender` | E | informational | 5 | 32 | 42 | not checked | moon gardening, a real German habit we do not serve yet |
| `haare schneiden mondkalender` | E | informational | 5 | **5** | **3** | not checked | uncontested, and we do not serve it either |

`günstige tage` at three competing apps is the single cheapest term in any store, and it
describes exactly what the app does.

---

## es — measured 2026-08-25. No web verdict available.

| keyword | cluster | intent | ASO pop | ASO diff | apps | status |
|---|---|---|---:|---:|---:|---|
| `calendario lunar` | A pillar | mixed | **44** | 44 | 212 | **live at `/es`, needs retarget** |
| `calendario` | A | product-page | 71 | 59 | 216 | combination fuel |
| `luna` | A | mixed | 54 | 46 | 225 | combination fuel |
| `horoscopo` | D | informational | 43 | **37** | 205 | best pop/diff in ES, but **off-positioning**. See banned.md |
| `fases de la luna` | A | informational | 17 | 43 | 194 | candidate |
| `widget luna` | C | product-page | 5 | 23 | 84 | cheap |
| `biorritmo` | B | product-page | 5 | 7 | 94 | cheap |
| `dia lunar` | B | informational | 5 | 55 | 29 | thin |

---

## ru — measured 2026-08-25. No web verdict available.

| keyword | cluster | intent | ASO pop | ASO diff | apps | status |
|---|---|---|---:|---:|---:|---|
| `лунный календарь` | A pillar | mixed | **32** | 49 | 244 | **live at `/ru`, needs retarget** |
| `луна` | A | mixed | 70 | 76 | 244 | too hard to own, free by combination |
| `календарь` | A | product-page | 66 | 58 | 235 | combination fuel |
| `дневник` | B | product-page | 63 | 63 | 246 | matches the Diary tab |
| `фазы луны` | A | informational | 24 | 43 | 119 | candidate |
| `биоритмы` | B | product-page | 5 | 17 | 44 | cheap |
| `календарь стрижек` | E | informational | 5 | 15 | 246 | haircut-by-moon is a real RU habit we do not serve |
| `благоприятные дни` | B | informational | 5 | **5** | **3** | uncontested, and it is our core feature stated in Russian |
| `посевной календарь` | E | informational | 5 | 48 | 122 | moon planting, not served |

---

## fr — no data

Astro does not track New Moon in the French store, and the App Store metadata for fr was
built by structural parallel to de/es/ru rather than from its own measurements. **`/fr`
therefore has no keyword target.** It stays a translation of the English page until
someone re-runs Astro on the French storefront. Do not invent a French target to fill
this gap.

---

## Captured People Also Ask, en, 2026-09-07

From the `30 lunar days` query. These are FAQ candidates for the 30-day page:

- What is a lunar day?
- How long is a lunar day?
- What is the 30th lunar day good for?
- Do lunar days line up with calendar days?

The search engine's own summary of that SERP is the gap in one sentence: *"The search
results primarily focus on the 30th lunar day. For detailed information about all 30
individual lunar days you would need to consult a comprehensive lunar calendar resource."*
There is no such single resource ranking. That is the page to write.
