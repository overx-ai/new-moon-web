---
title: "Die 30 Mondtage und wofür jeder gut ist"
slug: mondtage
url: /de/mondtage
locale: de
keyword: "30 mondtage"
secondary: ["mondtage", "mondkalender mondtage", "ungünstige mondtage", "welcher mondtag ist heute"]
cluster: B
intent: definition + list/reference (informational)
volume: "not measured. Astro has no row for any mondtage term and the web tool gives no volume. Do not quote one"
serp_format: >
  No dominant format, and the bare head term is polluted. Checked 2026-10-09 with a
  US-only search tool, so German-language results but not a German-locale SERP.
  (1) `mondtage` alone returns Wiktionary, where "Mondtag" means the time until the moon
  is back over the same point on Earth, or the day on the moon, plus Montag misspellings.
  (2) `30 mondtage` / `mondkalender mondtage` return one all-30 page from Tibetan astrology
  (tibetischeastrologie.com/mondtage, about 25,000 words, tithi system, Sanskrit names,
  deities, planets, haircut and ritual rules, days of unequal length at 12 degrees each),
  machine-translated Russian esoteric pages (maddy-murk.ru/de/, fetch timed out, not cited),
  print calendars on ebay/exlibris, and timeanddate/spaceweatherlive phase tables.
  (3) The `mondkalender` leaders, mondinfo.de and mondkalender-online.de, run on the moon in
  the zodiac sign (Paungger/Poppe tradition) and never use the word Mondtag.
head_term_choice: >
  H1 and title lead on "30 Mondtage", which is how the topic pages phrase it; bare
  `mondtage` is ambiguous (dictionary, Montag). Slug `mondtage` keeps the URL short and
  matches the singular/plural the app itself uses ("Mondtag").
paa: >
  Not available: the search tool returns no People Also Ask for German queries. FAQ is the
  English PAA captured 2026-09-07 (keywords.md) translated in intent, plus the three
  confusions visible in the German SERP: dictionary meaning, unequal tithi length, and
  Mondtag vs Mondzeichen, plus "ungünstige Mondtage", a heading on the SERP's esoteric pages.
angle: >
  The German market expects a moon calendar to give Tagesempfehlungen, but its leaders
  compute them from the moon's zodiac sign. The 30-Mondtage system in German is only served
  by a 25,000-word Tibetan treatise and translated esoterica. Gap: all 30 Mondtage on one
  scannable page, plain German, no astrology, from a hand-authored table, which states which
  "Mondtag" it means and how it differs from Mondzeichen, tithi, and the dictionary sense.
  Plus the counted pattern (cautions cluster on 13-15 and 24-28), which nobody else has.
meta_description: "Alle 30 Mondtage in einer Übersicht: was jeder Mondtag begünstigt, wovon er abrät und warum er selten mit dem Kalendertag zusammenfällt."
length: "about 2,200 words including the 30 day cards, matching the English sibling (/lunar-days). The 25,000-word Tibetan page is an outlier, not the target"
data_grounding:
  - "Day cards: src/data/lunar-days.json `de`, built by scripts/build-lunar-days.py from the app's Localizable.xcstrings at ref 7df59e4 (1.0 build 2, submitted for review 2026-09-08). All 240 dayN_activity_note keys, 7 insight keys and 8 activity_* names are state `translated` in de"
  - "Revision 1 (judge 77/100) and final fixes (judge 85/100, pass): 119 of the 247 German strings reworded via scripts/lunar-days-overrides.de.json (64 of them shown on the page). Wording only, success promises restated as suitability, every rating unchanged; the script fails if the app text an override replaces changes. Full table with app text, site text and reason: published.md, German note overrides. Port list for the app: seo/drafts/mondtage-de-app-strings.md"
  - "Every count (240, 24 cautions on 8 days, business 8 / sports 6 / physical 5, creative and meditation never cautioned, meditation top on 16, flat days 2 6 9 10 17 21, day 15 most cautioned, day 29 zero cautions) is printed by the same script and matches the published.md claims register. The `en` output at that ref is identical to the data /lunar-days already shipped"
  - "23h 37m, equal slices, 22.5 min drift, about 11 h per cycle: claims register (LunarCalculator.swift)"
  - "Eight phases: claims register (MoonPhase.swift). No zodiac anywhere in the app at 7df59e4: git grep for zodiac/tierkreis/sternzeichen, no hits"
sources:
  - url: https://earthsky.org/space/years-longest-shortest-lunar-month/
    supports: "Mean lunar month 29.53059 days, 29d 12h 44m, months vary by hours. Already in the claims register"
  - url: https://de.wiktionary.org/wiki/Mondtag
    supports: "Fetched 2026-10-09. Meaning [1]: the time until the moon is again over the same point above the Earth. Its hour figure is deliberately NOT printed: the tidal day length is on published.md's dropped-claims list"
  - url: https://www.tibetischeastrologie.com/mondtage
    supports: "Fetched 2026-10-09. All 30 days on one page with Sanskrit and Tibetan names, deities and ruling planet per day; 'Die Länge eines Mondtages ist nicht gleich ... Nach 12 Grad beginnt der nächste Tag'"
  - url: https://mondinfo.de/
    supports: "Fetched 2026-10-09. 'Abnehmender Mond im Sternzeichen Waage lässt die folgenden Aktivitäten besser gelingen'; categories Körper und Gesundheit, Haushalt, Garten. The word Mondtag does not appear. The page changes daily, so the site states only the general rule, no single day's advice"
  - url: https://www.mondkalender-online.de/mondkalender/faq.php
    supports: "Fetched 2026-10-09. Recommendations follow 'dem Sternzeichen (=Tierkreiszeichen)', Paungger/Poppe tradition. No mention of Mondtag"
experience_used:
  - "experience.md: the minute-precision turnover split (section 'Warum ein Mondtag selten zum Kalendertag passt')"
  - "experience.md: the hand-authored 30x8 table, translated into 51 languages (intro)"
  - "experience.md 2026-09-07 counts, and the day-29 draft that our own table contradicted (section 'Was die Tabelle im Ganzen zeigt'). Chosen as the German lead because the German esoteric SERP repeats exactly that folklore"
  - "experience.md: the 18:00 diary rule (product section)"
internal_links:
  - "/de (cluster A pillar, priority page): anchor 'New Moon, der Mondkalender mit Tagesempfehlungen'"
  - "/lunar-days (cluster B, English sibling): anchor 'Englisch', hreflang=en"
  - "/support (utility, English only): anchor 'Hilfeseite', flagged as English"
inbound_links_added:
  - "/de home, energy section: 'Alle 30 Mondtage und wofür jeder gut ist' -> /de/mondtage (Home.astro now renders the link for any locale whose copy has energy.daysLink)"
  - "/lunar-days product section: 'die 30 Mondtage' -> /de/mondtage, hreflang=de lang=de"
  - "hreflang en/de/x-default between /lunar-days and /de/mondtage, in the head and in sitemap.xml"
  - "/de/mondtage -> /lunar-days is the third inbound link /lunar-days was missing"
hero_prompt: >
  Not generated: no image tool is configured for this repo and the English sibling ships
  with the site og-image only. If one is wanted: flat navy crescent on a gold field (the
  app icon's palette), a ring of 30 small numbered dots around it, eight of them (13-15,
  24-28) in a muted warning amber, no stars, no zodiac glyphs, no photoreal moon.
known_gaps:
  - "The site's German notes now differ from the app until the owner ports seo/drafts/mondtage-de-app-strings.md into the catalogue. English notes are still rendered verbatim"
  - "APP DRIFT: the app's master (d11f4f8, 2026-09-09, unreleased) rates 12 activities, adding haircut, garden, health and money, and its de-DE store description already names Haareschneiden and Garten. When a build with that table ships, the sentence 'Garten, Haareschneiden und Haushalt kommen in dieser Tabelle nicht vor' and every count on both pages go stale. The data is pinned to 7df59e4 so this cannot happen silently"
revision: 2
judge: 85/100 pass, final fixes applied
status: draft
---

# Die 30 Mondtage und wofür jeder gut ist

Von Yauheni Malashchytski · Aktualisiert am 9. Oktober 2026

> Ein Mondmonat wird in 30 Mondtage geteilt, gezählt ab Neumond. Nach der Überlieferung eignen sich die meisten Mondtage für manche Tätigkeiten besser als für andere. Für den 1. nennt unsere Tabelle kreative Arbeit, Meditation und Lernen als beste Tätigkeiten. Für den 15., den Vollmondtag, nennt unsere Tabelle die meisten Warnungen. An 22 der 30 Mondtage wird in ihr von nichts abgeraten.

Bekannte deutsche Mondkalender wie [mondinfo.de](https://mondinfo.de/) und [mondkalender-online.de](https://www.mondkalender-online.de/mondkalender/faq.php) richten ihre Tagesempfehlungen nach dem Mond im Tierkreiszeichen. Daraus folgen Ratschläge, welcher Tag sich für Gesundheit, Haushalt oder Garten eignet. Hier geht es um etwas anderes, um die Mondtage, also Dreißigstel des Mondzyklus ab Neumond. Sternzeichen kommen darin nicht vor.

Ausführlich beschreibt die Mondtage auf Deutsch etwa die tibetische Astrologie, mit Sanskrit-Namen, Gottheiten und Planeten zu jedem Tag ([tibetischeastrologie.com](https://www.tibetischeastrologie.com/mondtage)). Hier stehen alle dreißig ohne diesen Überbau auf einer Seite.

Alles kommt aus der Tabelle, die in unserer iPhone-App steckt. Ich habe für jeden der 30 Tage und jede von 8 Tätigkeiten eine Bewertung mit kurzer Begründung geschrieben, 240 insgesamt, und alles in 51 Sprachen übersetzen lassen. Die Begründungen unten sind die deutsche Fassung aus der App, sprachlich überarbeitet, Erfolgsversprechen als Eignung formuliert; in der App steht teils noch der alte Wortlaut. Die Bewertungen sind unverändert.

Gezeigt sind für jeden Tag die Höchstbewertungen und die Warnungen. Die vollen vier Bewertungsstufen stehen in der App. Garten, Haareschneiden und Haushalt kommen in dieser Tabelle nicht vor, sie bewertet acht Arten von Tätigkeit. Die Bewertungen stammen aus überlieferter Deutung, gemessen ist daran nichts. Nimm es als Gerüst, um einen Monat zu ordnen.

## Was hier mit Mondtag gemeint ist

Ein Mondtag ist auf dieser Seite ein Dreißigstel des Mondzyklus, gezählt ab Neumond. Unsere App teilt den Zyklus in 30 gleich lange Stücke, jedes etwa 23 Stunden und 37 Minuten lang. Der 30. Mondtag dauert also genauso lange wie der 1.

Das Wort hat noch andere Bedeutungen, und das verwirrt. Im Wörterbuch ist ein Mondtag die Zeit, bis der Mond wieder über demselben Punkt der Erde steht ([Wiktionary](https://de.wiktionary.org/wiki/Mondtag)). Das ist eine andere Größe mit einer anderen Länge. Die tibetische Rechnung beginnt nach je 12 Grad Abstand zwischen Sonne und Mond einen neuen Tag, deshalb sind ihre Mondtage verschieden lang ([tibetischeastrologie.com](https://www.tibetischeastrologie.com/mondtage)).

Mondzeichen und Mondphase sind wieder etwas anderes. Das Mondzeichen ist das Tierkreiszeichen, in dem der Mond gerade steht. Die Phase beschreibt, wie viel vom Mond beleuchtet ist, und die App unterscheidet acht Phasen. Der Mondtag sagt nur, wie weit der Zyklus fortgeschritten ist.

## Warum ein Mondtag selten zum Kalendertag passt

Der Zyklus geht nicht in 30 ganzen Tagen auf. Im Mittel dauert er 29,53059 Tage, also 29 Tage, 12 Stunden und 44 Minuten, und einzelne Monate weichen um mehrere Stunden davon ab ([EarthSky](https://earthsky.org/space/years-longest-shortest-lunar-month/)). Mondtag und Kalendertag verschieben sich deshalb gegeneinander.

Weil ein Mondtag gut 22 Minuten kürzer ist als ein Kalendertag, rutscht der Wechsel jedes Mal um so viel nach vorn. Über einen ganzen Zyklus macht das gut 11 Stunden. Ein Dienstag kann bis 14:23 Uhr der 11. Mondtag sein und danach der 12.

Beim Bauen wäre es bequem gewesen, den Mondtag auf den nächsten Kalendertag zu runden. Dabei geht der Wechsel verloren. Ich habe ihn auf die Minute berechnet und den Tag in der Ansicht geteilt, sodass ein Tag mit Wechsel beide Hälften zeigt, jede mit ihren Empfehlungen.

Der Kalender sieht dadurch unruhiger aus. Darauf würde ich trotzdem als Letztes verzichten, weil die gerundete Fassung dir für einen Teil des Tages das Falsche sagt.

## Alle 30 Mondtage

Zu jedem Tag steht unten, welche Tätigkeiten am höchsten bewertet sind und wovon abgeraten wird. Sechs Tage haben weder Höchstbewertungen noch Warnungen, das ist dort vermerkt. Die fett gesetzte Deutung gehört meist zu einer Gruppe von Tagen. Eine eigene haben nur der 1., 15., 23. und 29. Die übrigen teilen sich drei: eine für die zunehmenden Tage 2 bis 14, eine für die abnehmenden Tage 16 bis 22 und eine für die Ruhetage 24 bis 28 und den 30.

### Mondtag 1

**Heute ist ein guter Tag für Neuanfänge.**

*Am besten für:* Kreative Arbeit. Neue Anfänge, frische Ideen kommen wie von selbst; Meditation und Spiritualität. Gut, um Absichten zu setzen; Lernen und Bildung. Sehr gute Merkfähigkeit und Konzentration

*Nicht empfohlen:* Nichts markiert

### Mondtag 2

**Die Energie wächst und trägt neue Vorhaben.**

*Gleichmäßig günstig.* Keine Tätigkeit sticht heraus. Alle acht sind günstig, und von keiner wird abgeraten.

### Mondtag 3

*Am besten für:* Körperliche Arbeit. Körperliche Energie steigt an; Sport und Fitness. Sehr gut zum Trainieren

*Nicht empfohlen:* Nichts markiert

### Mondtag 4

*Am besten für:* Körperliche Arbeit. Kraft und Ausdauer auf dem Höhepunkt; Sport und Fitness. Hohe Wettkampfenergie

*Nicht empfohlen:* Nichts markiert

### Mondtag 5

*Am besten für:* Körperliche Arbeit. Körperlich besonders leistungsfähig; Sport und Fitness. Sehr gut für sportliche Leistung

*Nicht empfohlen:* Nichts markiert

### Mondtag 6

*Gleichmäßig günstig.* Keine Tätigkeit sticht heraus. Alle acht sind günstig, und von keiner wird abgeraten.

### Mondtag 7

*Am besten für:* Kreative Arbeit. Möglicher kreativer Durchbruch; Geistige Arbeit. Klarheit und Intuition sind besonders stark; Geschäft und Finanzen. Günstig für wichtige Entscheidungen; Lernen und Bildung. Gut, um Schwieriges zu verstehen

*Nicht empfohlen:* Nichts markiert

### Mondtag 8

*Am besten für:* Kreative Arbeit. Kreativer Ausdruck besonders stark; Geistige Arbeit. Der Kopf ist so klar wie selten; Geschäft und Finanzen. Gut für große Vorhaben; Lernen und Bildung. Lernen fällt am leichtesten; Soziale Aktivitäten. Gut, um andere zu überzeugen

*Nicht empfohlen:* Nichts markiert

### Mondtag 9

*Gleichmäßig günstig.* Keine Tätigkeit sticht heraus. Alle acht sind günstig, und von keiner wird abgeraten.

### Mondtag 10

*Gleichmäßig günstig.* Keine Tätigkeit sticht heraus. Alle acht sind günstig, und von keiner wird abgeraten.

### Mondtag 11

*Am besten für:* Kreative Arbeit. Kreativer Schub vor dem Vollmond; Meditation und Spiritualität. Starke spirituelle Energie; Soziale Aktivitäten. Sehr gesellig

*Nicht empfohlen:* Nichts markiert

### Mondtag 12

*Am besten für:* Kreative Arbeit. Reichlich Inspiration; Meditation und Spiritualität. Tiefe spirituelle Verbindung; Soziale Aktivitäten. Nähe zu anderen Menschen

*Nicht empfohlen:* Nichts markiert

### Mondtag 13

*Am besten für:* Kreative Arbeit. Kreative Energie vor dem Vollmond; Meditation und Spiritualität. Viel Kraft, um Absichten zu verwirklichen; Soziale Aktivitäten. Hohe emotionale Energie

*Nicht empfohlen:* Geschäft und Finanzen. Wichtige Angelegenheiten verschieben

### Mondtag 14

*Am besten für:* Kreative Arbeit. Letzter Schub vor dem Vollmond; Meditation und Spiritualität. Vorbereitung auf den Vollmond

*Nicht empfohlen:* Geistige Arbeit. Gefühle trüben die Logik; Sport und Fitness. Verletzungsrisiko steigt; Geschäft und Finanzen. Keine Verpflichtungen eingehen

### Mondtag 15

**Gefühle und Kreativität auf dem Höhepunkt. Achte gut auf dich.**

*Am besten für:* Kreative Arbeit. Kreative Kraft und Gefühle sind am stärksten; Meditation und Spiritualität. Spirituell besonders intensiver Tag

*Nicht empfohlen:* Körperliche Arbeit. Ruhe- und Erholungstag; Geistige Arbeit. Gefühle überwiegen die Logik; Sport und Fitness. Hohes Verletzungsrisiko; Geschäft und Finanzen. Alle wichtigen Entscheidungen verschieben; Lernen und Bildung. Konzentration kaum möglich

### Mondtag 16

**Die Energie lässt nach. Zeit, Dinge abzuschließen und auszuwerten.**

*Am besten für:* Meditation und Spiritualität. Reflexion und Dankbarkeit

*Nicht empfohlen:* Nichts markiert

### Mondtag 17

*Gleichmäßig günstig.* Keine Tätigkeit sticht heraus. Alle acht sind günstig, und von keiner wird abgeraten.

### Mondtag 18

*Am besten für:* Geistige Arbeit. Die Konzentration ist voll zurück; Geschäft und Finanzen. Gut, um Entscheidungen zu treffen; Lernen und Bildung. Hervorragende Konzentration

*Nicht empfohlen:* Nichts markiert

### Mondtag 19

*Am besten für:* Geistige Arbeit. Gut für analytisches Denken; Geschäft und Finanzen. Günstig für große Abschlüsse; Lernen und Bildung. Gut für schwierige Themen

*Nicht empfohlen:* Nichts markiert

### Mondtag 20

*Am besten für:* Geistige Arbeit. Probleme lassen sich jetzt am besten lösen; Geschäft und Finanzen. Gute Zeit für Verhandlungen; Lernen und Bildung. Beste Zeit zum Einprägen

*Nicht empfohlen:* Nichts markiert

### Mondtag 21

*Gleichmäßig günstig.* Keine Tätigkeit sticht heraus. Alle acht sind günstig, und von keiner wird abgeraten.

### Mondtag 22

*Am besten für:* Meditation und Spiritualität. Zugang zur inneren Weisheit

*Nicht empfohlen:* Nichts markiert

### Mondtag 23

**Zeit für Reflexion und innere Weisheit.**

*Am besten für:* Meditation und Spiritualität. Tiefe Meditation

*Nicht empfohlen:* Nichts markiert

### Mondtag 24

**Zeit, auszuruhen, nachzudenken und sich auf den Neubeginn vorzubereiten.**

*Am besten für:* Meditation und Spiritualität. Abgeben und loslassen

*Nicht empfohlen:* Geschäft und Finanzen. Neue Vorhaben verschieben

### Mondtag 25

*Am besten für:* Meditation und Spiritualität. Reinigende Übungen

*Nicht empfohlen:* Körperliche Arbeit. Ruhe und Erholung; Sport und Fitness. Intensive Bewegung vermeiden; Geschäft und Finanzen. Keine Verpflichtungen eingehen

### Mondtag 26

*Am besten für:* Meditation und Spiritualität. Übungen für inneren Abstand

*Nicht empfohlen:* Körperliche Arbeit. So wenig wie möglich tun; Sport und Fitness. Ein Ruhetag ist nötig; Geschäft und Finanzen. Nur Offenes abschließen

### Mondtag 27

*Am besten für:* Meditation und Spiritualität. Idealer Tag für spirituellen Rückzug

*Nicht empfohlen:* Körperliche Arbeit. Viel Ruhe nötig; Sport und Fitness. Ganz pausieren; Geschäft und Finanzen. Keine neuen Projekte; Soziale Aktivitäten. Rückzug nach innen

### Mondtag 28

*Am besten für:* Meditation und Spiritualität. Leere und Stille

*Nicht empfohlen:* Körperliche Arbeit. Körperlich ganz stillhalten; Sport und Fitness. Absolute Ruhe; Geschäft und Finanzen. Auf den Neumond warten; Soziale Aktivitäten. Zeit für sich allein ist nötig

### Mondtag 29

**Der Zyklus endet. Zeit, sich auf den Neubeginn vorzubereiten.**

*Am besten für:* Meditation und Spiritualität. Absichten für den Neumond setzen

*Nicht empfohlen:* Nichts markiert

### Mondtag 30

*Am besten für:* Meditation und Spiritualität. Letzte Vorbereitung auf den Neubeginn

*Nicht empfohlen:* Nichts markiert

## Was die Tabelle im Ganzen zeigt

Nachdem ich alle 240 Bewertungen geschrieben hatte, habe ich sie gezählt. Nur 24 davon sind Warnungen, und sie fallen auf acht Tage in zwei Blöcken: 13 bis 15 rund um den Vollmond und 24 bis 28 in der späten abnehmenden Phase. An den übrigen 22 Tagen steht keine Warnung.

Die Warnungen zeigen deutlich in eine Richtung. Bei Geschäft und Finanzen steht an acht Tagen eine Warnung, öfter als bei allem anderen, bei Sport an sechs und bei körperlicher Arbeit an fünf. Kreative Arbeit und Meditation trifft keine einzige Warnung. Meditation ist sogar die am häufigsten empfohlene Tätigkeit und steht an 16 von 30 Tagen ganz oben.

Sechs Tage sind flach. Für den 2., 6., 9., 10., 17. und 21. sind alle acht Tätigkeiten als günstig bewertet, keine ist hervorgehoben und vor keiner wird gewarnt. Filterst du die Monatsansicht der App nach irgendeiner Tätigkeit, fallen diese sechs nie auf. Für diese sechs Tage hebt unsere Tabelle nichts hervor.

Einmal hat mich das Zählen selbst korrigiert. In einem Entwurf hatte ich geschrieben, der 29. sei der eine durchweg ungünstige Tag, weil die Überlieferung das so erzählt. In unserer eigenen Tabelle steht für den 29. keine einzige Warnung und genau eine Höchstbewertung, Meditation. Den Satz habe ich gestrichen. Was man über einen Mondtag liest und was in der App steht, stimmt nicht immer überein.

In unserer Tabelle stehen Ruhe-Warnungen fast nur am Vollmondtag und an den Tagen vor Neumond. Gewarnt wird vor Verausgabung, körperlich oder geschäftlich, nie vor kreativer Arbeit oder Meditation.

## Häufige Fragen

### Was ist ein Mondtag?

In der Zählung dieser Seite ein Dreißigstel des Mondmonats, gezählt ab Neumond. Weil der Mondmonat rund 29,5 Tage dauert und keine 30, ist ein Mondtag kürzer als ein Kalendertag und kann zu jeder Uhrzeit wechseln. Im Wörterbuch hat das Wort noch eine astronomische Bedeutung, die mit dieser Zählung nichts zu tun hat.

### Wie lang ist ein Mondtag?

In unserer App etwa 23 Stunden und 37 Minuten, ein Dreißigstel von 29,53059 Tagen, und alle 30 sind gleich lang. Die tibetische Rechnung zählt nach je 12 Grad Abstand zwischen Sonne und Mond, deshalb sind ihre Mondtage verschieden lang.

### Welcher Mondtag ist heute?

Das hängt von der Uhrzeit ab. Der Wechsel rutscht jeden Tag um gut 22 Minuten nach vorn, deshalb kann ein Kalendertag zwei Mondtage enthalten. Die App berechnet den Wechsel auf die Minute, zeigt dir den aktuellen Mondtag und teilt Tage mit Wechsel in zwei Hälften.

### Welche Mondtage sind ungünstig?

In unserer Tabelle gibt es nur an acht Tagen Warnungen: am 13., 14. und 15. rund um den Vollmond und vom 24. bis zum 28. Die meisten stehen beim 15. Ganz ungünstig ist kein Tag. Für jeden ist mindestens eine Tätigkeit am höchsten bewertet, oder alle acht sind günstig.

### Ist der Mondtag dasselbe wie das Mondzeichen?

Nein. Das Mondzeichen ist das Tierkreiszeichen, in dem der Mond gerade steht, und darauf beruhen Mondkalender wie mondinfo.de. Der Mondtag zählt nur, wie weit der Zyklus seit Neumond fortgeschritten ist. Sternzeichen spielen weder in dieser Tabelle noch in unserer App eine Rolle.

### Wofür ist der 30. Mondtag gut?

In dieser Tabelle ist für ihn eine Tätigkeit am höchsten bewertet, Meditation, und es steht keine Warnung dabei. Er ist der letzte Tag des Zyklus. Weil unsere App den Monat in dreißig gleiche Stücke teilt, dauert er genauso lange wie jeder andere Mondtag.

## Die Tabelle im Alltag

Diese Seite ist die Übersicht. Die App wendet dieselben Daten auf heute an. Sie ermittelt deinen Mondtag, teilt den Tag an der Wechselminute und ordnet alle acht Tätigkeiten für die Hälfte, in der du gerade bist. Du kannst auch einen ganzen Monat nach einer Tätigkeit filtern und siehst, welche Tage dazu passen.

Ein Tagebuch gibt's auch, und den heutigen Tag lasse ich dich absichtlich erst ab 18 Uhr bewerten. Gestern ist immer offen. Ein Tag, den du um neun Uhr morgens bewertest, ist noch eine Vorhersage. Festhalten lässt er sich erst am Abend. Nur so kannst du die Überlieferung an deiner eigenen Erfahrung prüfen.

New Moon ist kostenlos für das iPhone, in 51 Sprachen, mit einem Werbebanner, das ein einmaliger Kauf entfernt. Was die App sonst kann, steht auf der Seite [New Moon, der Mondkalender mit Tagesempfehlungen](/de). Diese Übersicht gibt es auch auf [Englisch](/lunar-days). Wenn sich etwas in der App anders verhält als hier beschrieben, schreib mir über die [Hilfeseite](/support), die auf Englisch ist.

Im App Store laden Die Empfehlungen stützen sich auf überlieferte Deutungen der Mondtage und dienen der Reflexion und Planung, nicht als medizinische, psychologische oder finanzielle Beratung.

