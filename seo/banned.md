# Banned words and claim shapes

Two passes over every piece of copy before it ships. Pass one catches the obvious, pass
two the subtle.

## Pass one: hype words
unlock, unleash, elevate, empower, seamless, effortless, revolutionary, game changing,
cutting edge, harness, dive in, delve, embark, journey, transform your life, supercharge,
next level, ultimate guide, in today's fast paced world.

## Pass two: claim shapes
- **No "no trackers", "no ads", "completely private", "zero data collection".** The app
  shows a mediated banner and declares tracking. See `product.md`.
- **No prices.** Territory-set. This includes `offers.price` in JSON-LD.
- **No ratings or download counts.** There are none yet, so any number is invented.
- **No cloud sync, trial or subscription.** They do not exist.
- **No inventory counting as a headline.** "51 languages" is a supporting fact, not the
  hook. The hook is what the app decides for you.
- **No horoscope or fortune-telling framing.** It is a planning tool with a stated
  non-advice disclaimer. Predicting outcomes is both off-brand and a review risk.
- **No medical, psychological or financial benefit claims.** Not "sleep better", not
  "be more productive", not "improve your mood".
- **No competitor-superiority claims** without a dated, cited source.
- **No em dashes in published copy.** Periods, commas, or restructure.
- No fake urgency, no "limited time", no invented testimonials.

## Pass three: claim shapes the 2026-09-07 research added

- **No astronomy or ephemeris precision claims.** No moonrise and moonset tables, no
  eclipse timing, no "accurate to the second". That is the Weather apps' ground, they have
  20k ratings there, and the app forecasts nothing.
- **No horoscope, zodiac, natal chart or fortune-telling framing**, in any locale. Spanish
  `horoscopo` has the best pop/diff ratio in that store and is still forbidden: the app
  disclaims medical, psychological and financial advice, and this framing recruits exactly
  the audience that disclaimer exists to manage.
- **No spellcraft, crystals or grimoire framing**, for the same reason.
- **No moon gardening, planting or haircut claims.** Cheap keywords in de and ru, and the
  app has no activity type for any of them. It would be a promise broken on first open.
- **No Chinese lunisolar or huangli framing.** A different calendar system.
- **Never present ASO popularity as web search volume.** They are different measurements
  on different scales. Say which one a number is.

## German, added 2026-10-09 with `/de/mondtage`

Pass one, words:
- **Corporate verbs**: `sorgt für`, `ermöglicht`, `bietet` as filler, `optimal`, `nahtlos`,
  `mühelos`, `ganzheitlich`, `einzigartig`, `entdecke`, `eintauchen`, `Reise` (unless literal).
  The app's own note strings use `Perfekt` and `Mächtigster`; site prose must not echo them.
- **Filler particles for fake casualness**: `eben`, `ja`, `einfach` (as in "einfach mal"),
  `halt`. One honest one per page at most.
- **Unmeasured superlatives**: `die ausführlichste`, `die beste`, `die einzige` about another
  site, even with "die ich gefunden habe". The first person does not make a comparison
  measured, and it is research rather than experience from `experience.md`.

Pass two, shapes:
- **The German dash is the en dash.** `–` as Gedankenstrich is the German form of the em
  dash rule. The app's own de-DE store description uses it heavily; site prose never does.
- **`nicht X, sondern Y` and `X, statt Y`** are the German form of "not X but Y".
- **Cards that talk**: "Jeder Tag nennt…", "Sechs Tage sagen das auch". Say where the
  information stands, not what a table cell does.
- **Never state the dictionary length of a `Mondtag`.** In German the word also means the
  tidal day, and the tidal figure is on `published.md`'s dropped list. Name the other
  meaning, link it, print no number for it.
- **Never present Mondzeichen recommendations as ours.** The German `mondkalender` leaders
  compute from the moon's zodiac sign. The app counts lunar days and has no zodiac code.

Added after the first `/de/mondtage` judge pass (77/100):
- **Rating sentences with a day or the table as subject**: "Der 15. rät…", "Die anderen 22
  Tage warnen…", "die Tabelle rät von X ab", "was jeder Mondtag begünstigt". Write where the
  information sits: "Für den 15. nennt die Tabelle…", "An 22 Tagen steht keine Warnung".
- **Counts scoped to the tradition** when they come from our table. "An 22 Tagen wird
  abgeraten" must say "in unserer Tabelle".
- **German colon reveals**: "Was ich mitnehme: …", "und genau darum geht es: …". Same rule
  as the English colon headline: write the plain sentence.
- **Translationese from the app catalogue**: noun chains on `Spitze` ("Spitze
  Problemlösung"), dropped articles ("vor Vollmond"), calques (`Grounding`, `Momentum`,
  `Networking`, `Retention`). Fix them in `scripts/lunar-days-overrides.de.json`, never by
  hand in the JSON data, and port them to the app.
- **"Wort für Wort" and similar fidelity claims** about rendered strings. They go stale the
  moment an override exists.
