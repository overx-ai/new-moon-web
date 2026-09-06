// The route manifest. Every indexable page registers here.
// Consumed by src/pages/sitemap.xml.ts AND by BaseLayout's canonical + hreflang tags,
// so the sitemap and the head can never disagree. An unregistered page is invisible.

export const LOCALES = ['en', 'es', 'de', 'fr', 'ru'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

// hreflang values. The app ships pt-BR and zh-Hans too; the site does not, yet.
export const HREFLANG: Record<Locale, string> = {
  en: 'en',
  es: 'es',
  de: 'de',
  fr: 'fr',
  ru: 'ru',
};

export type SitePage = {
  slug: string;
  locales: readonly Locale[];
  priority: number;
};

export const SITE_PAGES: readonly SitePage[] = [
  { slug: '',        locales: LOCALES,  priority: 1.0 },
  { slug: 'lunar-days', locales: ['en'], priority: 0.8 },
  { slug: 'support', locales: ['en'],   priority: 0.7 },
  { slug: 'privacy', locales: ['en'],   priority: 0.5 },
  { slug: 'terms',   locales: ['en'],   priority: 0.5 },
];

/** Canonical, non-trailing path for a slug in a locale. */
export function pathFor(slug: string, locale: Locale = DEFAULT_LOCALE): string {
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  return slug ? `${prefix}/${slug}` : prefix || '/';
}

export function pageFor(slug: string): SitePage | undefined {
  return SITE_PAGES.find((p) => p.slug === slug);
}
