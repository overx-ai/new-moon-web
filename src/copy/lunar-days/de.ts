import type { LunarDaysCopy } from '../types';
import { pathFor } from '../../site-pages';

// Brief and SERP notes: seo/drafts/mondtage-de.md. Lunar day notes, readings and activity
// names render from src/data/lunar-days.json, which takes them from the app's catalogue.
const WIKTIONARY = 'https://de.wiktionary.org/wiki/Mondtag';
const TIBETAN = 'https://www.tibetischeastrologie.com/mondtage';
const EARTHSKY = 'https://earthsky.org/space/years-longest-shortest-lunar-month/';
const MONDINFO = 'https://mondinfo.de/';
const MONDKALENDER_ONLINE = 'https://www.mondkalender-online.de/mondkalender/faq.php';

export const de: LunarDaysCopy = {
  meta: {
    title: 'Die 30 Mondtage und wofür jeder gut ist',
    description:
      'Alle 30 Mondtage in einer Übersicht: was für jeden Mondtag empfohlen wird, was nicht, und warum er selten mit dem Kalendertag zusammenfällt.',
  },
  published: '2026-10-09',
  dateLocale: 'de-DE',
  eyebrow: 'Übersicht',
  title: 'Die 30 Mondtage und wofür jeder gut ist',
  byline: { by: 'Von', updated: 'Aktualisiert am' },
  summary:
    'Alle 30 Mondtage in einer Übersicht, zu jedem die empfohlenen Tätigkeiten und die Warnungen, aus der bewerteten Tabelle in der iPhone-App New Moon.',
  breadcrumb: { home: 'Startseite', self: 'Die 30 Mondtage' },
  answer:
    'Ein Mondmonat wird in 30 Mondtage geteilt, gezählt ab Neumond. Nach der Überlieferung eignen sich die meisten Mondtage für manche Tätigkeiten besser als für andere. Für den 1. nennt unsere Tabelle kreative Arbeit, Meditation und Lernen als beste Tätigkeiten. Für den 15., den Vollmondtag, nennt unsere Tabelle die meisten Warnungen. An 22 der 30 Mondtage wird in ihr von nichts abgeraten.',
  intro: [
    `Bekannte deutsche Mondkalender wie <a href="${MONDINFO}">mondinfo.de</a> und <a href="${MONDKALENDER_ONLINE}">mondkalender-online.de</a> richten ihre Tagesempfehlungen nach dem Mond im Tierkreiszeichen. Daraus folgen Ratschläge, welcher Tag sich für Gesundheit, Haushalt oder Garten eignet. Hier geht es um etwas anderes, um die Mondtage, also Dreißigstel des Mondzyklus ab Neumond. Sternzeichen kommen darin nicht vor.`,
    `Ausführlich beschreibt die Mondtage auf Deutsch etwa die tibetische Astrologie, mit Sanskrit-Namen, Gottheiten und Planeten zu jedem Tag (<a href="${TIBETAN}">tibetischeastrologie.com</a>). Hier stehen alle dreißig ohne diesen Überbau auf einer Seite.`,
    'Alles kommt aus der Tabelle, die in unserer iPhone-App steckt. Ich habe für jeden der 30 Tage und jede von 8 Tätigkeiten eine Bewertung mit kurzer Begründung geschrieben, 240 insgesamt, und alles in 51 Sprachen übersetzen lassen. Die Begründungen unten sind die deutsche Fassung aus der App, sprachlich überarbeitet, Erfolgsversprechen als Eignung formuliert; in der App steht teils noch der alte Wortlaut. Die Bewertungen sind unverändert.',
    'Gezeigt sind für jeden Tag die Höchstbewertungen und die Warnungen. Die vollen vier Bewertungsstufen stehen in der App. Garten, Haareschneiden und Haushalt kommen in dieser Tabelle nicht vor, sie bewertet acht Arten von Tätigkeit. Die Bewertungen stammen aus überlieferter Deutung, gemessen ist daran nichts. Nimm es als Gerüst, um einen Monat zu ordnen.',
  ],
  before: [
    {
      heading: 'Was hier mit Mondtag gemeint ist',
      body: [
        'Ein Mondtag ist auf dieser Seite ein Dreißigstel des Mondzyklus, gezählt ab Neumond. Unsere App teilt den Zyklus in 30 gleich lange Stücke, jedes etwa 23 Stunden und 37 Minuten lang. Der 30. Mondtag dauert also genauso lange wie der 1.',
        `Das Wort hat noch andere Bedeutungen, und das verwirrt. Im Wörterbuch ist ein Mondtag die Zeit, bis der Mond wieder über demselben Punkt der Erde steht (<a href="${WIKTIONARY}">Wiktionary</a>). Das ist eine andere Größe mit einer anderen Länge. Die tibetische Rechnung beginnt nach je 12 Grad Abstand zwischen Sonne und Mond einen neuen Tag, deshalb sind ihre Mondtage verschieden lang (<a href="${TIBETAN}">tibetischeastrologie.com</a>).`,
        'Mondzeichen und Mondphase sind wieder etwas anderes. Das Mondzeichen ist das Tierkreiszeichen, in dem der Mond gerade steht. Die Phase beschreibt, wie viel vom Mond beleuchtet ist, und die App unterscheidet acht Phasen. Der Mondtag sagt nur, wie weit der Zyklus fortgeschritten ist.',
      ],
    },
    {
      heading: 'Warum ein Mondtag selten zum Kalendertag passt',
      body: [
        `Der Zyklus geht nicht in 30 ganzen Tagen auf. Im Mittel dauert er 29,53059 Tage, also 29 Tage, 12 Stunden und 44 Minuten, und einzelne Monate weichen um mehrere Stunden davon ab (<a href="${EARTHSKY}">EarthSky</a>). Mondtag und Kalendertag verschieben sich deshalb gegeneinander.`,
        'Weil ein Mondtag gut 22 Minuten kürzer ist als ein Kalendertag, rutscht der Wechsel jedes Mal um so viel nach vorn. Über einen ganzen Zyklus macht das gut 11 Stunden. Ein Dienstag kann bis 14:23 Uhr der 11. Mondtag sein und danach der 12.',
        'Beim Bauen wäre es bequem gewesen, den Mondtag auf den nächsten Kalendertag zu runden. Dabei geht der Wechsel verloren. Ich habe ihn auf die Minute berechnet und den Tag in der Ansicht geteilt, sodass ein Tag mit Wechsel beide Hälften zeigt, jede mit ihren Empfehlungen.',
        'Der Kalender sieht dadurch unruhiger aus. Darauf würde ich trotzdem als Letztes verzichten, weil die gerundete Fassung dir für einen Teil des Tages das Falsche sagt.',
      ],
    },
  ],
  list: {
    heading: 'Alle 30 Mondtage',
    hint:
      'Zu jedem Tag steht unten, welche Tätigkeiten am höchsten bewertet sind und wovon abgeraten wird. Sechs Tage haben weder Höchstbewertungen noch Warnungen, das ist dort vermerkt. Die fett gesetzte Deutung gehört meist zu einer Gruppe von Tagen. Eine eigene haben nur der 1., 15., 23. und 29. Die übrigen teilen sich drei: eine für die zunehmenden Tage 2 bis 14, eine für die abnehmenden Tage 16 bis 22 und eine für die Ruhetage 24 bis 28 und den 30.',
    jump: 'Zu einem Mondtag springen',
    day: 'Mondtag',
    best: 'Am besten für',
    even: 'Gleichmäßig günstig',
    evenNote: 'Keine Tätigkeit sticht heraus. Alle acht sind günstig, und von keiner wird abgeraten.',
    avoid: 'Nicht empfohlen',
    nothing: 'Nichts markiert',
  },
  after: [
    {
      heading: 'Was die Tabelle im Ganzen zeigt',
      body: [
        'Nachdem ich alle 240 Bewertungen geschrieben hatte, habe ich sie gezählt. Nur 24 davon sind Warnungen, und sie fallen auf acht Tage in zwei Blöcken: 13 bis 15 rund um den Vollmond und 24 bis 28 in der späten abnehmenden Phase. An den übrigen 22 Tagen steht keine Warnung.',
        'Die Warnungen zeigen deutlich in eine Richtung. Bei Geschäft und Finanzen steht an acht Tagen eine Warnung, öfter als bei allem anderen, bei Sport an sechs und bei körperlicher Arbeit an fünf. Kreative Arbeit und Meditation trifft keine einzige Warnung. Meditation ist sogar die am häufigsten empfohlene Tätigkeit und steht an 16 von 30 Tagen ganz oben.',
        'Sechs Tage sind flach. Für den 2., 6., 9., 10., 17. und 21. sind alle acht Tätigkeiten als günstig bewertet, keine ist hervorgehoben und vor keiner wird gewarnt. Filterst du die Monatsansicht der App nach irgendeiner Tätigkeit, fallen diese sechs nie auf. Für diese sechs Tage hebt unsere Tabelle nichts hervor.',
        'Einmal hat mich das Zählen selbst korrigiert. In einem Entwurf hatte ich geschrieben, der 29. sei der eine durchweg ungünstige Tag, weil die Überlieferung das so erzählt. In unserer eigenen Tabelle steht für den 29. keine einzige Warnung und genau eine Höchstbewertung, Meditation. Den Satz habe ich gestrichen. Was man über einen Mondtag liest und was in der App steht, stimmt nicht immer überein.',
        'In unserer Tabelle stehen Ruhe-Warnungen fast nur am Vollmondtag und an den Tagen vor Neumond. Gewarnt wird vor Verausgabung, körperlich oder geschäftlich, nie vor kreativer Arbeit oder Meditation.',
      ],
    },
  ],
  faq: {
    heading: 'Häufige Fragen',
    items: [
      {
        question: 'Was ist ein Mondtag?',
        answer:
          'In der Zählung dieser Seite ein Dreißigstel des Mondmonats, gezählt ab Neumond. Weil der Mondmonat rund 29,5 Tage dauert und keine 30, ist ein Mondtag kürzer als ein Kalendertag und kann zu jeder Uhrzeit wechseln. Im Wörterbuch hat das Wort noch eine astronomische Bedeutung, die mit dieser Zählung nichts zu tun hat.',
      },
      {
        question: 'Wie lang ist ein Mondtag?',
        answer:
          'In unserer App etwa 23 Stunden und 37 Minuten, ein Dreißigstel von 29,53059 Tagen, und alle 30 sind gleich lang. Die tibetische Rechnung zählt nach je 12 Grad Abstand zwischen Sonne und Mond, deshalb sind ihre Mondtage verschieden lang.',
      },
      {
        question: 'Welcher Mondtag ist heute?',
        answer:
          'Das hängt von der Uhrzeit ab. Der Wechsel rutscht jeden Tag um gut 22 Minuten nach vorn, deshalb kann ein Kalendertag zwei Mondtage enthalten. Die App berechnet den Wechsel auf die Minute, zeigt dir den aktuellen Mondtag und teilt Tage mit Wechsel in zwei Hälften.',
      },
      {
        question: 'Welche Mondtage sind ungünstig?',
        answer:
          'In unserer Tabelle gibt es nur an acht Tagen Warnungen: am 13., 14. und 15. rund um den Vollmond und vom 24. bis zum 28. Die meisten stehen beim 15. Ganz ungünstig ist kein Tag. Für jeden ist mindestens eine Tätigkeit am höchsten bewertet, oder alle acht sind günstig.',
      },
      {
        question: 'Ist der Mondtag dasselbe wie das Mondzeichen?',
        answer:
          'Nein. Das Mondzeichen ist das Tierkreiszeichen, in dem der Mond gerade steht, und darauf beruhen Mondkalender wie mondinfo.de. Der Mondtag zählt nur, wie weit der Zyklus seit Neumond fortgeschritten ist. Sternzeichen spielen weder in dieser Tabelle noch in unserer App eine Rolle.',
      },
      {
        question: 'Wofür ist der 30. Mondtag gut?',
        answer:
          'In dieser Tabelle ist für ihn eine Tätigkeit am höchsten bewertet, Meditation, und es steht keine Warnung dabei. Er ist der letzte Tag des Zyklus. Weil unsere App den Monat in dreißig gleiche Stücke teilt, dauert er genauso lange wie jeder andere Mondtag.',
      },
    ],
  },
  app: {
    heading: 'Die Tabelle im Alltag',
    body: [
      'Diese Seite ist die Übersicht. Die App wendet dieselben Daten auf heute an. Sie ermittelt deinen Mondtag, teilt den Tag an der Wechselminute und ordnet alle acht Tätigkeiten für die Hälfte, in der du gerade bist. Du kannst auch einen ganzen Monat nach einer Tätigkeit filtern und siehst, welche Tage dazu passen.',
      'Ein Tagebuch gibt\'s auch, und den heutigen Tag lasse ich dich absichtlich erst ab 18 Uhr bewerten. Gestern ist immer offen. Ein Tag, den du um neun Uhr morgens bewertest, ist noch eine Vorhersage. Festhalten lässt er sich erst am Abend. Nur so kannst du die Überlieferung an deiner eigenen Erfahrung prüfen.',
      `New Moon ist kostenlos für das iPhone, in 51 Sprachen, mit einem Werbebanner, das ein einmaliger Kauf entfernt. Was die App sonst kann, steht auf der Seite <a href="${pathFor('', 'de')}">New Moon, der Mondkalender mit Tagesempfehlungen</a>. Diese Übersicht gibt es auch auf <a href="${pathFor('lunar-days')}" hreflang="en">Englisch</a>. Wenn sich etwas in der App anders verhält als hier beschrieben, schreib mir über die <a href="${pathFor('support')}" hreflang="en">Hilfeseite</a>, die auf Englisch ist.`,
    ],
  },
  cta: 'Im App Store laden',
};
