import type { APIRoute } from 'astro';
import { SITE_PAGES, pathFor, HREFLANG, DEFAULT_LOCALE } from '../site-pages';

// Hand-rolled instead of @astrojs/sitemap: same manifest as the head tags, no dependency,
// and it cannot break on a future Astro upgrade.
export const GET: APIRoute = ({ site }) => {
  const origin = site?.href.replace(/\/$/, '') ?? '';
  const lastmod = new Date().toISOString().slice(0, 10);

  const urls = SITE_PAGES.flatMap((page) =>
    page.locales.map((locale) => {
      const alternates =
        page.locales.length > 1
          ? page.locales
              .map(
                (l) =>
                  `\n    <xhtml:link rel="alternate" hreflang="${HREFLANG[l]}" href="${origin}${pathFor(page.slug, l)}" />`,
              )
              .join('') +
            `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${origin}${pathFor(page.slug, DEFAULT_LOCALE)}" />`
          : '';

      return `  <url>
    <loc>${origin}${pathFor(page.slug, locale)}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${page.priority.toFixed(1)}</priority>${alternates}
  </url>`;
    }),
  ).join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
