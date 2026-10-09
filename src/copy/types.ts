// One shape for every locale. A missing key is a compile error, not a blank page.
export interface Copy {
  htmlLang: string;
  meta: { title: string; description: string };
  nav: { features: string; screens: string; support: string; get: string };
  hero: {
    eyebrow: string;
    titleLines: readonly string[];
    lead: string;
    cta: string;
    ctaNote: string;
  };
  energy: { heading: string; lead: string; names: readonly string[]; daysLink?: string };
  features: readonly { title: string; body: string }[];
  screens: { heading: string; lead: string; alts: readonly string[] };
  widgets: { heading: string; lead: string };
  languages: { heading: string; body: string };
  privacy: { heading: string; body: string; link: string };
  disclaimer: string;
  cta: { heading: string; body: string; button: string };
  footer: { support: string; privacy: string; terms: string; rights: string };
}

type Section = { heading: string; body: readonly string[] };

// The lunar day reference. Paragraph strings are HTML, so prose can carry its own links.
export interface LunarDaysCopy {
  meta: { title: string; description: string };
  published: string;
  dateLocale: string;
  eyebrow: string;
  title: string;
  byline: { by: string; updated: string };
  summary: string;
  breadcrumb: { home: string; self: string };
  answer: string;
  intro: readonly string[];
  before: readonly Section[];
  list: {
    heading: string;
    hint: string;
    jump: string;
    day: string;
    best: string;
    even: string;
    evenNote: string;
    avoid: string;
    nothing: string;
  };
  after: readonly Section[];
  faq: { heading: string; items: readonly { question: string; answer: string }[] };
  app: Section;
  cta: string;
}
