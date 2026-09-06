# new-moon

Marketing site for **New Moon: Lunar Calendar**, at `trynewmoon.app`.
Astro 4, static, one dependency, zero client JavaScript.

```bash
npm install
npm run dev      # localhost:4321
npm run build    # -> dist/
npm run preview
```

## Pages
| Route | Locales |
|---|---|
| `/` | en, and `/es` `/de` `/fr` `/ru` |
| `/support` | en |
| `/privacy` | en |
| `/terms` | en |
| `/sitemap.xml`, `/robots.txt`, `/llms.txt` | |

`/privacy` and `/support` are the URLs the App Store listing points at. They must stay at
those exact paths.

## Adding a page
1. Add the slug to `SITE_PAGES` in `src/site-pages.ts` with its locales and priority.
2. Create the route under `src/pages/`.
3. Rebuild and confirm it appears in `dist/sitemap.xml`.

An unregistered page gets no canonical tag and no sitemap entry.

## Verification

```bash
npm run build

# One canonical per page, none of them trailing-slashed.
grep -c 'rel="canonical"' dist/index.html dist/privacy/index.html

# No internal link ends in a slash (root aside).
grep -oh 'href="/[^"]*/"' -r dist ; echo "(empty is correct)"

# Six hreflang on each home page, none on the legal pages.
grep -o 'rel="alternate" hreflang' dist/index.html | wc -l    # 6
grep -o 'rel="alternate" hreflang' dist/privacy/index.html | wc -l  # 0

# No price ever reaches the schema.
grep -o '"offers"\|"aggregateRating"' -r dist --include='*.html' ; echo "(empty is correct)"
```

Then read `/`, `/privacy` and `/support` at 320px and 1440px in both colour schemes. Note
that headless Chrome clamps its viewport to 500px, so test narrow widths inside a 320px
`<iframe>` rather than with `--window-size`.

## Deploy
Vercel, from the default branch. `vercel.json` supplies clean URLs, the
`apple-app-site-association` content type, and `/download` to the App Store.

Before launch: set the governing law jurisdiction in `src/data/terms.json`, and have the
legal pages reviewed.
