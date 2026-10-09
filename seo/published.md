# Published pages

Search Console columns hold the last export only, never estimates. The current numbers are
from `seo/exports/2026-10-09-gsc.md`: **three months** to 2026-10-06, not the 28 days Step 9
assumes, and too few impressions for any verdict yet. Blank means the export had no figure.

| URL | Keyword | Cluster | Published | Last review | Impr. | CTR | Pos. | Verdict | Next action |
|---|---|---|---|---|---|---|---|---|---|
| `/` | `lunar calendar app` | A | 2026-09-06 | 2026-09-07 | 14 | 0% | 9.5 | new | retargeted to the lifestyle shoulder; verify SERP after launch |
| `/de` | `mondkalender` | A | 2026-09-06 | 2026-09-07 | 8 | 0% | 10.6 | new | **priority page.** Content SERP. The de version of `/lunar-days` is being written as `/de/mondtage`, linked from this page's energy section |
| `/es` | `calendario lunar` | A | 2026-09-06 | 2026-09-07 | 3 | 0% | | new | no web SERP verdict yet, ES search not available here |
| `/ru` | `лунный календарь` | A | 2026-09-06 | 2026-09-07 | 4 | 0% | | new | no web SERP verdict yet |
| `/fr` | none | A | 2026-09-06 | 2026-09-07 | 3 | 0% | | new | no Astro data for the FR store; translation only until measured |
| `/lunar-days` | `30 lunar days` | B | 2026-09-07 | 2026-09-07 | 0 | | | new | request indexing at launch. **Only 2 inbound links** (`/` and `/support`), below the 3 to 5 the structure guide asks for. The site has 6 pages and the other 3 are legal, so a third honest inbound link does not exist yet. Revisit when cluster B grows. **Zero impressions** in the 2026-10-09 export. `/de/mondtage` adds the third inbound link and an hreflang pair once it ships |
| `/de/mondtage` | `30 mondtage` | B | 2026-10-09 | | | | | new | draft `seo/drafts/mondtage-de.md`. Step 7: 77/100 fail, then judge 85/100, fixes applied 2026-10-09. Inbound: `/de` energy section, `/lunar-days` product section, hreflang with `/lunar-days`. Request indexing on publish |
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
| Lunar day data, both locales, is pinned to app ref `7df59e4` | `scripts/build-lunar-days.py` `DEFAULT_REF` | 1.0 build 2, submitted for review 2026-09-08. App master (`d11f4f8`, 2026-09-09, unreleased) rates **12** activities, adding haircut, garden, health and money, so every count above would change. The `en` output at `7df59e4` is identical to the data `/lunar-days` shipped on 2026-09-07. Bump the ref only when a build with the new table ships, and re-derive every count on both pages |
| German lunar day note text, readings and activity names | `Localizable.xcstrings` at `7df59e4`, plus `scripts/lunar-days-overrides.de.json` | All 240 `dayN_activity_note`, the 7 `insight*` keys and the 8 `activity_*` names have state `translated` in `de`. **119 of those 247 strings are reworded on the site** (2026-10-09, after the Step 7 judge flagged literal translations), listed under *German note overrides* below. Ratings are never touched, only wording. The script fails if the app text an override replaces ever changes |
| In the dictionary, "Mondtag" also means the time until the moon is back over the same point on Earth | https://de.wiktionary.org/wiki/Mondtag | Fetched 2026-10-09, meaning [1]. Used on `/de/mondtage` **without** its hour figure, which is the dropped tidal-day claim below |
| Tibetan reckoning starts a new lunar day every 12 degrees of sun-moon distance, so its days are unequal; the page gives Sanskrit names, deities and planets per day | https://www.tibetischeastrologie.com/mondtage | Fetched 2026-10-09: "Die Länge eines Mondtages ist nicht gleich ... Nach 12 Grad beginnt der nächste Tag" |
| mondinfo.de and mondkalender-online.de compute recommendations from the moon's zodiac sign | https://mondinfo.de/ , https://www.mondkalender-online.de/mondkalender/faq.php | Fetched 2026-10-09: "Abnehmender Mond im Sternzeichen Waage lässt die folgenden Aktivitäten besser gelingen", window cleaning in its household list; "nach dem Sternzeichen (=Tierkreiszeichen)". Neither page contains "Mondtag" |
| The app has no zodiac code or strings | `git grep` at `7df59e4` for zodiac, tierkreis, sternzeichen | No hits. Backs "Sternzeichen kommen weder auf dieser Seite noch in unserer App vor" |

## German note overrides

`/de/mondtage` renders the app's German strings with these replacements, applied by
`scripts/build-lunar-days.py` to the `de` output only. Source of truth is
`scripts/lunar-days-overrides.de.json`; this table is a copy for review. The app catalogue
is unchanged, and the owner's port list is `seo/drafts/mondtage-de-app-strings.md`.
"On page" marks the strings the page actually shows (top ratings, cautions, and the first
day of each reading); the rest were fixed so the app port is complete.

Reasons: `grammar` ungrammatical or missing article; `literal` literal translation, unidiomatic; `anglicism` English loan or calque; `superlative` banned superlative (Optimal, Perfekt, Mächtigster, Revolutionär); `spitze` one of the repeated "Spitze" constructions; `prediction` stated an outcome rather than a suitability.

| Key | App text | Site text | Reason | On page |
|---|---|---|---|---|
| `day1_creative_note` | Neue Anfänge, frische Ideen fließen natürlich | Neue Anfänge, frische Ideen kommen wie von selbst | literal | yes |
| `day1_physical_note` | Langsam beginnen, Momentum allmählich aufbauen | Langsam anfangen, dann allmählich steigern | anglicism |  |
| `day1_meditation_note` | Perfekt für Setzen von Absichten | Gut, um Absichten zu setzen | superlative | yes |
| `day1_business_note` | Gut für Start neuer Projekte | Gut, um neue Projekte zu beginnen | grammar |  |
| `day1_learning_note` | Ausgezeichnetes Behalten und Fokus | Sehr gute Merkfähigkeit und Konzentration | literal | yes |
| `day2_physical_note` | Gut für Start von Fitness-Routinen | Gut, um mit regelmäßigem Training anzufangen | grammar |  |
| `day2_meditation_note` | Nützliche Grounding-Praktiken | Erdende Übungen tun gut | anglicism |  |
| `day2_sports_note` | Energiestufen steigen | Das Energieniveau steigt | grammar |  |
| `day2_learning_note` | Neue Informationen leicht absorbieren | Neues lässt sich leicht aufnehmen | literal |  |
| `day3_creative_note` | Vorstellungskraft erhöht | Lebhafte Vorstellungskraft | grammar |  |
| `day3_physical_note` | Beginn des Spitzen körperlicher Energie | Körperliche Energie steigt an | grammar | yes |
| `day3_mental_note` | Problemlösung verbessert | Probleme lassen sich leichter lösen | literal |  |
| `day3_sports_note` | Ausgezeichnet für Training | Sehr gut zum Trainieren | literal | yes |
| `day3_business_note` | Kühne Aktionen ergreifen | Mutig handeln | literal |  |
| `day4_creative_note` | Fokus auf Ausführung über Ideen | Lieber umsetzen als neue Ideen sammeln | grammar |  |
| `day4_physical_note` | Spitze von Kraft und Ausdauer | Kraft und Ausdauer auf dem Höhepunkt | spitze | yes |
| `day4_meditation_note` | Besser Meditation in Bewegung | Meditation in Bewegung passt besser | grammar |  |
| `day4_business_note` | Vereinbarungen zuversichtlich schließen | Abschlüsse mit Zuversicht angehen | literal |  |
| `day4_learning_note` | Hands-on-Lernen bevorzugt | Am besten durch Ausprobieren lernen | anglicism |  |
| `day5_physical_note` | Optimale körperliche Leistung | Körperlich besonders leistungsfähig | superlative | yes |
| `day5_meditation_note` | Nützliche Balance-Praktiken | Übungen für das Gleichgewicht tun gut | anglicism |  |
| `day5_sports_note` | Spitze athletischer Leistung | Sehr gut für sportliche Leistung | spitze | yes |
| `day5_business_note` | Risiken günstig | Günstig, um etwas zu wagen | literal |  |
| `day5_learning_note` | Informationen gut synthetisieren | Gut, um Wissen zusammenzuführen | literal |  |
| `day6_business_note` | Networking-Möglichkeiten | Gelegenheiten, Kontakte zu knüpfen | anglicism |  |
| `day7_physical_note` | Gut für Fähigkeiten verfeinern | Gut, um Fertigkeiten zu verfeinern | grammar |  |
| `day7_mental_note` | Spitze von Klarheit und Intuition | Klarheit und Intuition sind besonders stark | spitze | yes |
| `day7_meditation_note` | Spirituelle Realisierungen zugänglich | Spirituelle Einsichten liegen nahe | literal |  |
| `day7_sports_note` | Technik über Kraft | Technik vor Kraft | literal |  |
| `day7_business_note` | Wichtige Entscheidungen günstig | Günstig für wichtige Entscheidungen | literal | yes |
| `day7_learning_note` | Revolutionäres Verständnis | Gut, um Schwieriges zu verstehen | superlative | yes |
| `day7_social_note` | Bedeutungsvolle Gespräche | Gespräche, die etwas bedeuten | literal |  |
| `day8_creative_note` | Spitze kreativen Ausdrucks | Kreativer Ausdruck besonders stark | spitze | yes |
| `day8_mental_note` | Mentale Klarheit am besten | Der Kopf ist so klar wie selten | literal | yes |
| `day8_business_note` | Große Initiativen erfolgreich | Gut für große Vorhaben | prediction | yes |
| `day8_learning_note` | Lernkapazität auf Spitze | Lernen fällt am leichtesten | spitze | yes |
| `day8_social_note` | Starker sozialer Einfluss | Gut, um andere zu überzeugen | literal | yes |
| `day9_creative_note` | Kreatives Momentum aufrechterhalten | Der kreative Schwung hält an | anglicism |  |
| `day9_mental_note` | Fokus gut aufrechterhalten | Die Konzentration hält | literal |  |
| `day9_sports_note` | Konsistente Leistung | Gleichmäßige Leistung | anglicism |  |
| `day9_business_note` | An Plänen festhalten | Pläne konsequent umsetzen | literal |  |
| `day10_physical_note` | Auf Spitze aufbauen | Auf den Höhepunkt hinarbeiten | spitze |  |
| `day10_meditation_note` | Nützliche Zentrierungspraktiken | Übungen für die innere Mitte tun gut | literal |  |
| `day10_sports_note` | Vorbereitung für Wettkampf | Vorbereitung auf den Wettkampf | grammar |  |
| `day10_business_note` | Konsistenter Fortschritt | Stetiger Fortschritt | anglicism |  |
| `day11_creative_note` | Kreative Welle vor Vollmond | Kreativer Schub vor dem Vollmond | literal | yes |
| `day11_business_note` | Auf Kulmination vorbereiten | Auf den Höhepunkt vorbereiten | literal |  |
| `day11_learning_note` | Lernen integrieren | Gelerntes verankern | literal |  |
| `day11_social_note` | Soziale Energie auf Spitze | Sehr gesellig | spitze | yes |
| `day12_creative_note` | Inspiration reichlich | Reichlich Inspiration | grammar | yes |
| `day12_social_note` | Tiefe emotionale Verbindungen | Nähe zu anderen Menschen | literal | yes |
| `day13_creative_note` | Kreative Energie vor Vollmond | Kreative Energie vor dem Vollmond | grammar | yes |
| `day13_mental_note` | Geist überaktiv | Der Kopf ist überdreht | literal |  |
| `day13_meditation_note` | Starke Manifestationsenergie | Viel Kraft, um Absichten zu verwirklichen | literal | yes |
| `day13_sports_note` | Aktivitäten nur leicht | Nur leichte Aktivitäten | grammar |  |
| `day13_learning_note` | Unmöglich zu konzentrieren | Konzentration fällt schwer | grammar |  |
| `day13_social_note` | Emotionale Energie hoch | Hohe emotionale Energie | grammar | yes |
| `day14_creative_note` | Letzte Welle vor Vollmond | Letzter Schub vor dem Vollmond | literal | yes |
| `day14_mental_note` | Logik von Emotionen überschattet | Gefühle trüben die Logik | literal | yes |
| `day14_meditation_note` | Vorbereitung auf Vollmond | Vorbereitung auf den Vollmond | grammar | yes |
| `day14_business_note` | Verpflichtungen vermeiden | Keine Verpflichtungen eingehen | literal | yes |
| `day15_creative_note` | Maximale kreative Kraft und Emotionen | Kreative Kraft und Gefühle sind am stärksten | literal | yes |
| `day15_mental_note` | Emotionen übersteigen Logik | Gefühle überwiegen die Logik | literal | yes |
| `day15_meditation_note` | Mächtigster spiritueller Tag | Spirituell besonders intensiver Tag | superlative | yes |
| `day15_learning_note` | Fokus unmöglich | Konzentration kaum möglich | literal | yes |
| `day15_social_note` | Emotionale Treffen | Gefühlvolle Begegnungen | literal |  |
| `day16_physical_note` | Graduelle Rückkehr zur Aktivität | Langsam wieder aktiv werden | literal |  |
| `day16_sports_note` | Leichte Übungen wieder aufgenommen | Leichtes Training wieder aufnehmen | grammar |  |
| `day16_business_note` | Überprüfen nicht entscheiden | Prüfen, noch nicht entscheiden | grammar |  |
| `day18_mental_note` | Fokus kehrt hervorragend zurück | Die Konzentration ist voll zurück | literal | yes |
| `day18_sports_note` | Fähigkeitsentwicklung | Fertigkeiten ausbauen | literal |  |
| `day18_business_note` | Entscheidungsfindung stark | Gut, um Entscheidungen zu treffen | literal | yes |
| `day18_social_note` | Professionelles Networking | Berufliche Kontakte pflegen | anglicism |  |
| `day19_physical_note` | Konsistente Leistung | Gleichmäßige Energie | anglicism |  |
| `day19_mental_note` | Spitze analytischen Denkens | Gut für analytisches Denken | spitze | yes |
| `day19_meditation_note` | Mentale Klarheitsmeditation | Meditation für einen klaren Kopf | literal |  |
| `day19_business_note` | Große Vereinbarungen günstig | Günstig für große Abschlüsse | literal | yes |
| `day19_learning_note` | Komplexe Themen gemeistert | Gut für schwierige Themen | prediction | yes |
| `day20_mental_note` | Spitze Problemlösung | Probleme lassen sich jetzt am besten lösen | spitze | yes |
| `day20_meditation_note` | Fokuspraktiken | Konzentrationsübungen | anglicism |  |
| `day20_business_note` | Vereinbarungen erfolgreich | Gute Zeit für Verhandlungen | prediction | yes |
| `day20_learning_note` | Beste Retentionsperiode | Beste Zeit zum Einprägen | anglicism | yes |
| `day21_meditation_note` | Grounding-Meditation | Erdende Meditation | anglicism |  |
| `day22_creative_note` | Weisheit in Kreativität | Gestalten mit Weisheit | literal |  |
| `day22_meditation_note` | Innere Weisheit zugänglich | Zugang zur inneren Weisheit | literal | yes |
| `day22_social_note` | Bedeutungsvolle Austausche | Gespräche mit Tiefgang | grammar |  |
| `day23_meditation_note` | Tiefer Meditationszustand | Tiefe Meditation | literal | yes |
| `day24_meditation_note` | Freisetzung und Loslassen | Abgeben und loslassen | literal | yes |
| `day24_business_note` | Neue Initiativen verschieben | Neue Vorhaben verschieben | literal | yes |
| `day24_learning_note` | Überprüfen nicht neues Material | Wiederholen, nichts Neues anfangen | grammar |  |
| `day25_creative_note` | Letzte Berührungen | Letzter Feinschliff | literal |  |
| `day25_mental_note` | Mentale Erschöpfung beginnt | Geistige Müdigkeit setzt ein | literal |  |
| `day25_meditation_note` | Reinigungspraktiken | Reinigende Übungen | literal | yes |
| `day25_business_note` | Verpflichtungen vermeiden | Keine Verpflichtungen eingehen | literal | yes |
| `day25_social_note` | Einsamkeit vorteilhaft | Zeit allein tut gut | literal |  |
| `day26_physical_note` | Minimale Aktivität | So wenig wie möglich tun | literal | yes |
| `day26_mental_note` | Mentales Chaos bereinigen | Im Kopf aufräumen | literal |  |
| `day26_meditation_note` | Trennungspraktiken | Übungen für inneren Abstand | literal | yes |
| `day26_sports_note` | Ruhetag notwendig | Ein Ruhetag ist nötig | grammar | yes |
| `day26_business_note` | Lose Enden nur binden | Nur Offenes abschließen | grammar | yes |
| `day27_physical_note` | Tiefe Ruhe notwendig | Viel Ruhe nötig | grammar | yes |
| `day27_meditation_note` | Ideales spirituelles Rückzugsort | Idealer Tag für spirituellen Rückzug | grammar | yes |
| `day27_sports_note` | Vollständige Ruhe | Ganz pausieren | literal | yes |
| `day27_social_note` | Nach innen ziehen | Rückzug nach innen | grammar | yes |
| `day28_creative_note` | Inkubationsperiode | Ideen reifen lassen | literal |  |
| `day28_physical_note` | Vollständige Unbeweglichkeit | Körperlich ganz stillhalten | literal | yes |
| `day28_business_note` | Auf Neumond warten | Auf den Neumond warten | grammar | yes |
| `day28_learning_note` | Wissen setzen lassen | Wissen sacken lassen | literal |  |
| `day28_social_note` | Einsamkeit notwendig | Zeit für sich allein ist nötig | literal | yes |
| `day29_meditation_note` | Absichten für Neumond setzen | Absichten für den Neumond setzen | grammar | yes |
| `day29_business_note` | Planungsphase nur | Nur planen | grammar |  |
| `day30_meditation_note` | Letzte Vorbereitung für Wiedergeburt | Letzte Vorbereitung auf den Neubeginn | literal | yes |
| `day30_learning_note` | Aufgeregt für neues Wissen | Neugierig auf neues Wissen | literal |  |
| `insightDay1` | Neue Anfänge und frische Starts sind heute günstig. | Heute ist ein guter Tag für Neuanfänge. | literal | yes |
| `insightDay15` | Spitze emotionaler und kreativer Energie. Selbstpflege praktizieren. | Gefühle und Kreativität auf dem Höhepunkt. Achte gut auf dich. | spitze | yes |
| `insightDay29` | Auf Erneuerung mit Zyklusende vorbereiten. | Der Zyklus endet. Zeit, sich auf den Neubeginn vorzubereiten. | grammar | yes |
| `insightWaxingPhase` | Wachsende Energie unterstützt neue Initiativen und Aktion. | Die Energie wächst und trägt neue Vorhaben. | literal | yes |
| `insightWaningPhase` | Energie freigesetzt. Auf Fertigstellung und Analyse fokussieren. | Die Energie lässt nach. Zeit, Dinge abzuschließen und auszuwerten. | anglicism | yes |
| `insightRestingPhase` | Zeit für Ruhe, Reflexion und Vorbereitung auf Erneuerung. | Zeit, auszuruhen, nachzudenken und sich auf den Neubeginn vorzubereiten. | literal | yes |

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
