import type { LunarDaysCopy } from '../types';
import { pathFor } from '../../site-pages';

// Brief (seo/ pipeline):
//   keyword:   30 lunar days   | secondary: moon guide (ASO 18/19)
//   cluster:   B, from seo/clusters.md
//   intent:    informational, list/reference
//   serp:      a dozen sites run one thin page per lunar day; none covers all 30
//   angle:     all 30 in one scannable place, without the esoteric framing
//   experience: minute-precision turnover split; the 18:00 diary rule; the hand
//              authored 30x8 table (seo/experience.md)
//   internal:  pillar `/`, German pillar `/de` (cluster A), German version `/de/mondtage`
//   sources:   [{ url: 'https://earthsky.org/space/years-longest-shortest-lunar-month/',
//                supports: 'Mean lunar month 29.53059 days, 29d 12h 44m. Fetched 2026-09-07' }]
export const en: LunarDaysCopy = {
  meta: {
    title: 'The 30 lunar days, and what each one is good for',
    description:
      'All 30 lunar days in one table: what each one favours, what it does not, and why a lunar day rarely matches a calendar day.',
  },
  published: '2026-09-07',
  dateLocale: 'en-GB',
  eyebrow: 'Reference',
  title: 'The 30 lunar days, and what each one is good for',
  byline: { by: 'By', updated: 'Updated' },
  summary:
    'All 30 lunar days in one reference, each with the activities it favours and the ones it cautions against, from the rated table that ships in the New Moon iPhone app.',
  breadcrumb: { home: 'Home', self: 'The 30 lunar days' },
  answer:
    'A lunar month is divided into 30 lunar days, and each one traditionally favours some kinds of activity over others. The first suits beginnings, creative work and learning. The fifteenth, at full moon, is the most cautioned day of the cycle, and 22 of the 30 days caution against nothing at all.',
  intro: [
    'Most pages about lunar days give you one day at a time, so answering a simple question like "is the ninth a good day to launch something" means opening nine tabs. This page is all thirty in one place. What you see below is the top and bottom of each day, pulled from the table that ships inside our iPhone app: I hand wrote a rating and a short reason for all 30 days against 8 kinds of activity, 240 in total, and had the lot translated into 51 languages. The full set of four rating levels is in the app. Here I\'ve kept each day\'s strongest recommendations and its cautions, because that\'s what you need to answer the question you came with.',
    'Two things worth knowing before you read it. This is the 30 lunar day system, which counts thirtieths of the cycle from new moon. It has nothing to do with the Chinese lunisolar calendar, and there is no astrology or natal chart anywhere in it. Every reading below comes out of traditional interpretation rather than measurement, so treat it as a way to structure a month rather than as instruction.',
  ],
  before: [
    {
      heading: 'Why a lunar day rarely matches a calendar day',
      body: [
        'The cycle doesn\'t divide into 30 whole days. Its mean is 29.53059 days, 29 days 12 hours and 44 minutes, and individual months vary by several hours either side (<a href="https://earthsky.org/space/years-longest-shortest-lunar-month/">EarthSky</a>). So lunar days and calendar days drift against each other and the turnover lands at a different time every month. A given Tuesday can be the eleventh lunar day until 14:23 and the twelfth after it.',
        'Rounding a lunar day to the nearest calendar date is the easy way to build this, and it loses the transition. When I built ours I calculated the turnover to the minute and split the day in the interface, so a day with a changeover shows both halves and the recommendations that go with each. It makes the calendar look busier, and it\'s the single thing I wouldn\'t give up, because the rounded version tells you the wrong thing for part of the day.',
      ],
    },
  ],
  list: {
    heading: 'All 30 lunar days',
    hint:
      'Each day lists whatever it rates highest and whatever it cautions against. Six days do neither, and say so. The reading in bold belongs to a group of days rather than to one. Four days get a reading of their own, the 1st, 15th, 23rd and 29th; the rest share three, one for the waxing days 2 to 14, one for the waning days 16 to 22, and one for the resting days 24 to 28 and the 30th.',
    jump: 'Jump to a lunar day',
    day: 'Lunar day',
    best: 'Best for',
    even: 'Evenly favourable',
    evenNote:
      'Nothing is singled out. All eight activities rate favourable, and nothing is cautioned against.',
    avoid: 'Not recommended',
    nothing: 'Nothing flagged',
  },
  after: [
    {
      heading: 'What the pattern looks like',
      body: [
        'Having written all 240 ratings, I went back and counted them, and the shape of the thing is clearer than any single day in it. Only 24 of the 240 are cautions, and they fall on just eight days, in two runs: 13 to 15 around the full moon, and 24 to 28 in the late waning stretch. The other 22 days flag nothing.',
        'The cautions also lean hard in one direction. Business is cautioned on eight separate days, more than any other activity, then sports on six and physical work on five. Creative work and meditation are never cautioned once in the entire table, and meditation is the single most recommended activity of the cycle, top rated on 16 of the 30 days.',
        'Six days, the 2nd, 6th, 9th, 10th, 17th and 21st, are flat: all eight activities rate favourable, none is singled out and none is cautioned. Filter the app\'s month view by any one activity and those six never stand out, whichever activity you pick. They are the days the tradition has no strong opinion about.',
        'What I take from my own counting is that the tradition spends very little time telling you to stay in bed. It\'s wary of pushing hard, on your body or on a deal, and it\'s in favour of making things and sitting still. Whatever you make of that, it knows which way it leans.',
      ],
    },
  ],
  faq: {
    heading: 'Questions people ask',
    items: [
      {
        question: 'What is a lunar day?',
        answer:
          "A lunar day is one thirtieth of a lunar month, counted from new moon. It isn't the same length as a calendar day, and a lunar month runs about 29.5 days rather than 30, so the two drift against each other and a lunar day can turn over at any hour.",
      },
      {
        question: 'Do lunar days line up with calendar days?',
        answer:
          "No. A lunar day usually begins partway through a calendar day. That's why one calendar date can carry two different lunar days, one before the turnover time and one after.",
      },
      {
        question: 'What is the 30th lunar day good for?',
        answer:
          "Finishing things. It's the last day of the cycle, and our app divides the month into thirty equal slices, so it runs the same 23 hours 37 minutes as every other lunar day. In this system it top rates one activity, meditation, and cautions against nothing.",
      },
      {
        question: 'How long is a lunar day?',
        answer:
          "About 23 hours and 37 minutes, a thirtieth of the 29.53059 day lunar month. Being 22 and a half minutes shorter than a calendar day, the turnover slips that much earlier each time, which comes to 11 hours and a quarter over a full cycle. That is why this month's turnover time and next month's rarely resemble each other.",
      },
      {
        question: 'Are the lunar days the same as moon phases?',
        answer:
          'No. They describe different things, and our app shows both: eight moon phases and thirty lunar days. The phase is how much of the moon is lit. The lunar day is how far through the cycle you are, counted in thirtieths.',
      },
    ],
  },
  app: {
    heading: 'Using this as a moon guide',
    body: [
      'This table is the reference. The app is the same data applied to today: it works out which lunar day you\'re in, splits the day at the turnover minute, and ranks all eight activities for the half you\'re in. You can also filter a whole month by one activity and see which days suit it, which is the part I use most.',
      'There\'s a diary too, and I deliberately won\'t let you rate today before 18:00. Yesterday is always open. A day rated at nine in the morning is a prediction, not a record, and the whole point of keeping it is to check the tradition against your own experience instead of taking it on faith.',
      `New Moon is free on iPhone, in 51 languages, with one banner advert that a single purchase removes. Start with <a href="${pathFor('')}">what the app does</a> if you haven't seen it. The product page is also written in <a href="${pathFor('', 'de')}" hreflang="de">German</a>, and so is this reference: <a href="${pathFor('lunar-days', 'de')}" hreflang="de" lang="de">die 30 Mondtage</a>. If something in the app does not behave the way this page describes, <a href="${pathFor('support')}">support</a> is the place to tell me.`,
    ],
  },
  cta: 'Download on the App Store',
};
