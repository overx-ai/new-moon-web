import { defineConfig } from 'astro/config';

// No integrations. @astrojs/sitemap is deliberately absent, as in both sibling sites:
// it crashes at build time against astro@4.16 (internal route-API mismatch), and
// src/pages/sitemap.xml.ts generates the same file from src/site-pages.ts, which is also
// what drives the canonical and hreflang tags. One manifest, so the two cannot drift.
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://trynewmoon.app',
  output: 'static',
  trailingSlash: 'never',
  i18n: {
    locales: ['en', 'es', 'de', 'fr', 'ru'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false, // English stays at /, mirroring the en-US store listing
    },
  },
  build: {
    // Inline the CSS so first paint costs no extra request.
    inlineStylesheets: 'always',
  },
});
