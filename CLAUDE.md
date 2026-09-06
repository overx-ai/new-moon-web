# new-moon (trynewmoon.app)

Marketing site for **New Moon: Lunar Calendar** (`ai.overx.LunarCalendar`, App Store
`6800363857`). Astro 4, static output, no client JavaScript, deployed on Vercel.

The app source lives at `../../0E-extensions/LunarCalendar-iOS26`. That repo is the source
of truth for copy, colours and claims. `seo/product.md` is the extracted, dated summary.

## Tech Stack
- Astro 4, `output: 'static'`, `trailingSlash: 'never'`. **One dependency: `astro`.**
- **Zero client JavaScript.** No exceptions. Theme switching is pure CSS, the FAQ is
  `<details>`.
- Deploy: `git push` then Vercel builds. Config is `vercel.json`: clean URLs, the AASA
  content type, and the `/download` redirect.

## Critical conventions
- **Register every page in `src/site-pages.ts`.** It drives the sitemap *and* the canonical
  and hreflang tags. An unregistered page is invisible to crawlers.
- **Canonical URLs are non-trailing** (`/support`, not `/support/`). Never link one.
- **App facts live in `src/app.ts`.** App Store id, the energies, the activities, the
  widgets, the screenshots. Do not hardcode any of them in a page.
- **Marketing copy lives in `src/copy/<locale>.ts`**, all typed against `Copy` in
  `src/copy/types.ts`, so a missing key fails the build instead of rendering blank.
- **Legal copy lives in `src/data/{privacy,terms,support}.json`** and is **English only**,
  as in both sibling sites. Machine translating IDFA, ATT and GDPR disclosures would make
  each language say something legally different.
- Five locales, one page body: `src/pages/index.astro` is English, `[locale]/index.astro`
  generates the other four, both rendering `src/components/Home.astro`. Do not fork the
  page tree per locale and do not add an i18n library.

## Copy rules, which are positioning and not style
**`seo/product.md` is the source of truth for every claim and `seo/banned.md` for every
forbidden word and claim shape. Read both before touching copy.**

- **Never write "no trackers", "no ads" or "completely private".** The app ships Unity
  LevelPlay (ironSource), sets `NSPrivacyTracking` to true, and uses the IDFA under ATT.
  The accurate line is "no account, the diary stays on the device, one banner on one tab".
- **Never claim cloud sync, a free trial or a subscription.** Dead strings for all three
  survive in the app's string catalogue from the pre-2026-04 model. None of them exist.
- **No price anywhere, including `offers.price` in JSON-LD.** Prices are territory-set.
- **No ratings or download counts.** The app has none yet, so any number would be invented.
- Sell *what to do about the moon*, not astronomy, and never as a Chinese lunisolar almanac.
- "51 languages" is the app's, "9 locales" is the App Store listing's. Never conflate them.
- The non-advice disclaimer ships in the footer of every page and in `/terms`. Keep it.
- **No em dashes in published copy.**

## Positioning, measured 2026-09-07

`seo/keywords.md` holds the measured numbers and, importantly, their provenance. Read it
before changing any copy that targets a query.

- **German is the priority market, not English.** `mondkalender` 52/50 against
  `lunar calendar` 9/54, with `calendario lunar` 44/44 and `лунный календарь` 32/49 between.
  `/de` is the highest-value page on the site.
- **The locales are not translations of each other any more.** Each home page targets its
  own measured head term, and `/de` leads on *Tagesempfehlungen* because its SERP is content
  sites, not store listings. `/fr` is still a translation, because Astro does not track the
  French store. Do not invent a French target to fill that gap.
- **English competes on the lifestyle shoulder, never the astronomy head.** US ranks 1 to 6
  for `lunar calendar` are Weather apps with 20k+ ratings. The shoulder is `lucky days`
  25/23, `moon widget` 22/48, `moon guide` 18/19, `biorhythm` 16/13.
- **ASO popularity is not web search volume.** Say which one any number is. The two answer
  different questions and only one of them is about a web page.
- The searchable evidence for what to avoid is in the dead keywords: `zodiac` 9/66 and
  `moon sign` 9/62 have no demand *and* high difficulty.

## Design
- **Direction A, "App Mirror"**, chosen from a five-direction canvas on 2026-09-06.
- **Dark is the default**, because the app forces a dark UI style. The complete dark
  palette is on bare `:root`; light overrides in `@media (prefers-color-scheme: light)`
  and again under `:root[data-theme="light"]`. **Never declare a colour only inside a
  media block**, it would be undefined in the un-stamped state.
- Colours are the app's own values from `Core/Constants/AppColors.swift`. The light
  variants of the six energy colours were darkened here for contrast on a light ground;
  if the app ever ships real light variants, replace them.
- Type is the system rounded stack, mirroring the app's SF Pro rounded. **No webfont.**
- **`--font-display` must not list a CJK fallback.** SF Pro Rounded carries no Cyrillic, so
  `/ru` fell through to `Hiragino Maru Gothic ProN`, whose Cyrillic has CJK advance widths
  and no 800 weight: the hero set thin, hugely tracked, and over five lines. `system-ui`
  now follows the rounded faces, so Cyrillic resolves to SF Pro. The app does the same
  thing on iOS, where `design: .rounded` also falls back to SF Pro for Cyrillic, so `/ru`
  losing the rounded terminals is correct rather than a compromise.
- Check `/ru` after any font change. Latin locales cannot show this class of bug: the bad
  fallback is only reachable by glyphs the rounded faces lack.
- `og:image:width/height` in `BaseLayout` are hardcoded to match `public/og-image.jpg`
  (1200x675). Change both together.
- **No `favicon.svg`.** An `image/svg+xml` icon wins over PNG everywhere that supports it,
  so a stale one would silently override every other icon.
- Astro scopes `nav a` to `nav[cid] a[cid]`, specificity (0,2,2), which **outranks** a bare
  `.cta[cid]` at (0,2,0). Qualify such rules as `nav a.cta` or they lose silently.

## Screenshots
`public/screenshots/*.webp` are real captures from the app running in an iPhone 17 Pro Max
simulator on 2026-09-06, resized to 620px wide. `today.webp` is cropped above the house ad
strip. Full resolution originals were not committed. To retake: build the app for a
simulator, get past onboarding and the ATT prompt, then `xcrun simctl io <udid> screenshot`.

## Verification
- `npm run build`, then `npm run preview` and the greps in README "Verification".
- **Headless Chrome clamps its viewport to 500px minimum**, so `--window-size=320` gives a
  cropped 500px render, not a 320px layout. To check narrow widths, load the page in a
  320px-wide `<iframe>` inside a wider window.
- Read `/`, `/privacy` and `/support` at 320px and 1440px in both colour schemes.
- Cross-check every sentence of `/privacy` against `LunarCalendar/PrivacyInfo.xcprivacy`.

## Known gaps
- `src/data/terms.json` has **`[JURISDICTION TO BE SET]`** in the governing law section.
  It must be filled before launch and should be reviewed by a lawyer.
- **The app's own English is inconsistent about British and American spelling.** The App
  Store description and the rating labels use `favourable`; the 240 `dayN_activity_note`
  strings in `Localizable.xcstrings` use `favorable` and `favored`. `/lunar-days` renders
  those notes verbatim, so both spellings appear on one card. Site prose is British
  throughout. Fixing it means editing the app's string catalogue, which is out of scope here.
- The app still links to `overx.ai/privacy`, `overx.ai/terms` and `overx.ai` from
  `SettingsView.swift` and `PaywallView.swift`. The App Store description already points at
  `trynewmoon.app`. The in-app links are out of scope for this repo but block submission.
