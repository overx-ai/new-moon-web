# First person material

Things only someone who has actually built or used this app could write. Every page
should carry at least one. Do not invent more.

- The calendar splits a day in two when the lunar day turns over mid day. Most lunar apps
  round to the nearest calendar day and quietly lose the transition. This one computes it
  to the minute and shows both halves.
- The diary deliberately will not let you rate today before 18:00. Yesterday is always
  open. The reason is that a day rated at 9am is a prediction, not a record.
- The app icon is a flat navy crescent on a gold field, chosen because every one of the
  top five competitors ships a dark tile with a photoreal grey moon. Gold is the only
  non-dark thing in the search row.
- Lunar day 25 in the September 2026 cycle rates Meditation highly and Physical Work and
  Sports as not recommended. The daily insight for it reads "Time to rest, reflect, and
  prepare for renewal."
- The recommendation table is hand authored: 30 days by 8 activities, each with its own
  short reason, and all of it translated into 51 languages.


## Added 2026-09-07, from counting the shipped table

These came out of parsing `RecommendationEngine.swift` and the string catalogue rather than
from reading about lunar days anywhere. Nobody outside the project can state them.

- Only **24 of the 240 ratings are cautions**, and they land on eight days in two runs:
  13 to 15 around the full moon, and 24 to 28 in the late waning stretch. The other 22 days
  caution against nothing.
- **Business is the most cautioned activity**, on eight separate days, then sports on six
  and physical work on five. **Creative work and meditation are never cautioned once.**
- **Meditation is the most recommended activity of the whole cycle**, top rated on 16 of
  the 30 days. Sports and physical work are top rated on three each.
- **Six days are flat**: the 2nd, 6th, 9th, 10th, 17th and 21st rate all eight activities
  favourable, with nothing singled out and nothing cautioned.
- I wrote a draft claiming the 29th was the one uniformly unfavourable day, because that is
  what the folklore says. Our own table says day 29 has **zero** cautions and one top
  rating, meditation. The draft was wrong and I cut the sentence. Worth remembering that
  the received wisdom about lunar days and the table we actually ship do not always agree.

## German market note, 2026-09-07

The German web SERP for `mondkalender` is content sites, not app listings, and the leaders
rank on *Tagesempfehlungen*. German readers already expect a moon calendar to tell them what
the day is good for. English readers do not, which is why the English page has to explain
the premise and the German one does not.

## Not yet available
- No install numbers, no ratings, no reviews. The app has not shipped.
- No retention or usage data.
