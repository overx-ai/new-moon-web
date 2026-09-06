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
  energy: { heading: string; lead: string; names: readonly string[] };
  features: readonly { title: string; body: string }[];
  screens: { heading: string; lead: string; alts: readonly string[] };
  widgets: { heading: string; lead: string };
  languages: { heading: string; body: string };
  privacy: { heading: string; body: string; link: string };
  disclaimer: string;
  cta: { heading: string; body: string; button: string };
  footer: { support: string; privacy: string; terms: string; rights: string };
}
