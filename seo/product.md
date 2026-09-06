# Product source of truth

Every claim on this site must be checkable against this file, and this file against the
app repo at `../../0E-extensions/LunarCalendar-iOS26`. If the two disagree, the app wins
and this file is stale.

Last verified: 2026-09-06, against `fastlane/metadata/en-US/`, `PrivacyInfo.xcprivacy`,
`Podfile`, `Core/Constants/AppColors.swift` and a simulator run of the built app.

## Identity
- Store name: **New Moon: Lunar Calendar**. On-device name: **New Moon**.
- Subtitle: Phases, Widgets & Day Planner
- Bundle `ai.overx.LunarCalendar`, team `26SAAF256Q`, App Store id `6800363857`.
- iOS 17.0 minimum. Primary category Lifestyle.
- Publisher: Yauheni Malashchytski.

## Features that EXIST
- 30 lunar days, each rated against 8 activity types, 4 rating levels, with a short note
  per pair. That is 240 rated pairs.
- 8 activities: creative work, physical work, mental work, meditation and spirituality,
  sports and fitness, business and finance, learning and education, social activities.
- 6 energy categories: creative, physical, mental, spiritual, balanced, rest.
- Today tab: phase, illumination percentage, lunar day, daily insight line, ranked
  activities, community percentage once at least 20 people have rated a pair.
- Lunar day transitions computed to the minute. A calendar day containing one is split.
- Calendar tab: month grid coloured by energy, filterable by a single activity, legend.
- My Experience tab: yesterday always ratable, today unlocks at 18:00 local. Free text
  reflection. Stored locally, 90 day rolling window. Ad free.
- 3 Home Screen widgets: Lunar Day (small), Lunar Week (small), Lunar Calendar (medium).
  They refresh at midnight and at each transition. No ads in any widget.
- Local notifications, opt in, daily at a time you pick.
- 51 in-app languages, auto-detected on first launch, switchable without restart.

## The hallucination fence: features that DO NOT exist
- **No cloud sync.** Dead strings for it survive in the catalogue. There is no sync.
- **No subscription and no free trial.** Dead paywall strings survive for these too.
- **No account, no login, no profile, no account deletion flow.**
- No HealthKit, location, camera, microphone, contacts, calendar or photo access.
- No Apple Watch app. No iPad-specific layout claims.
- No Chinese lunisolar or huangli calendar system. It is the 30 lunar day system.

## Monetisation
Free, with **one banner on the Today tab only**. One non-consumable in-app purchase
removes it permanently. RevenueCat entitlement `ad_free`. Everything else in the app is
free, including all widgets and all 51 languages.

**Never print a price on the site.** Prices are territory-set. Let the App Store quote it.

## Privacy facts that constrain copy
- Ad SDK is **Unity LevelPlay (ironSource) ~> 9.4**. Three docs in the app repo still say
  AppLovin MAX. They are stale; the code and Info.plist keys are LevelPlay.
- `NSPrivacyTracking` is **true**. Tracking domain `postbacks-is.com`. IDFA via ATT.
- So: **never write "no trackers", "no ads" or "fully private".** The accurate line is
  "no account, the diary stays on the device, one banner on one tab".
- Off-device endpoints: activity feedback, the contact form, house ads, and the ad network.

## Positioning, measured 2026-09-07

Competitors sell *when the moon is full*. This sells *what to do about it*. That was always
the thesis; the keyword data now says where it lands and where it does not. Full numbers and
provenance in `keywords.md`.

**Markets, in priority order.** German demand for the category head term is roughly five
times English at lower difficulty: `mondkalender` 52/50 against `lunar calendar` 9/54, with
`calendario lunar` 44/44 and `лунный календарь` 32/49 in between. English is the weakest
market this app has. Treat `/de` as the priority page, not `/`.

**The English head is an astronomy market.** Ranks 1 to 6 for `lunar calendar` in the US
App Store are Weather apps with 20k+ ratings selling phase accuracy. We do not compete
there with zero ratings. The winnable English shoulder is `lucky days` (25/23),
`moon widget` (22/48), `moon guide` (18/19), `biorhythm` (16/13), `energy tracker` (15/23).

**The German market already expects this product.** Its web SERP for `mondkalender` is
content sites, not store listings, and the leaders rank on *Tagesempfehlungen*: daily
recommendations for life, health, garden and home. German copy should lead on what the day
favours. English copy should not assume that framing is familiar.

**The evidence for what to avoid** is the dead keywords, not intuition. `zodiac` 9/66 and
`moon sign` 9/62 have almost no demand *and* brutal difficulty. `astrology` 61/73 and
`horoscope` 58/73 have demand we would certainly lose. The astrology framing costs the
positioning and buys nothing. We compute no natal charts.

**One real competitor**, not six: "The Moon Calendar" (US rank 9, Productivity, ~10k
ratings, *moon aligned planner and journal*). Same thesis. It has no per-lunar-day activity
ranking, no filterable month grid, and is English only.

**Defensible, and unmatched in any storefront's top 25:**
- 30 lunar days each with a ranked activity list
- filter the whole month by one activity and watch the strong days light up
- three Home Screen widgets
- 51 in-app languages against overwhelmingly single-language competitors
- a personal check-in record you can compare against the cycle yourself

**Real market gaps the app does not serve.** Moon gardening and haircut-by-moon are
established habits in the German and Russian markets at near-zero difficulty
(`aussaatkalender`, `календарь стрижек`, `haare schneiden mondkalender` at three competing
apps). None of the eight activity types covers planting or haircuts. Do not write copy that
implies otherwise. This is a product note, not a content plan.

## Required disclaimer
"Activity guidance draws on traditional lunar-day interpretations and is offered for
reflection and planning, not as medical, psychological, or financial advice."
