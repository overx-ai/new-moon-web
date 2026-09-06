import { APP, APP_STORE_URL } from './app';

// No offers.price and no aggregateRating anywhere. Prices are territory-set and the app
// has no ratings yet, so quoting either would be a claim the store does not back.

export function appSchema(site: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: APP.storeName,
    operatingSystem: `iOS ${APP.minimumOs}+`,
    applicationCategory: 'LifestyleApplication',
    url: site,
    installUrl: APP_STORE_URL,
    inLanguage: `${APP.languageCount} languages`,
    author: { '@type': 'Person', name: APP.publisher },
    featureList: [
      `Ranked activity guidance for all ${APP.lunarDayCount} lunar days`,
      'Moon phase, illumination and lunar day, calculated on the device',
      'Month calendar filterable by a single activity',
      'Three Home Screen widgets',
      'Daily check-in and reflection diary',
    ],
  };
}

export function websiteSchema(site: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: APP.storeName,
    url: site,
  };
}

export function breadcrumb(site: string, items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${site}${it.path}`,
    })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: it.answer.replace(/<[^>]+>/g, ''),
      },
    })),
  };
}
