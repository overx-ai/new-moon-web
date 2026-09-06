// Every fact about the app lives here. Pages must not hardcode any of it.
// Source of truth: ../../0E-extensions/LunarCalendar-iOS26 (fastlane/metadata,
// Info.plist, Core/Constants/AppColors.swift, PrivacyInfo.xcprivacy).

export const APP = {
  name: 'New Moon',
  storeName: 'New Moon: Lunar Calendar',
  subtitle: 'Phases, Widgets & Day Planner',
  bundleId: 'ai.overx.LunarCalendar',
  teamId: '26SAAF256Q',
  // Reserved in App Store Connect. Re-verify before launch: the app was still at
  // PREPARE_FOR_SUBMISSION when this site was built.
  appStoreId: '6800363857',
  minimumOs: '17.0',
  category: 'Lifestyle',
  publisher: 'Yauheni Malashchytski',
  supportEmail: 'support@overx.ai',
  languageCount: 51,
  lunarDayCount: 30,
} as const;

export const APP_STORE_URL = `https://apps.apple.com/app/id${APP.appStoreId}`;

// The six energy categories. Colours are the app's own values, dark variant.
export const ENERGIES = [
  { key: 'creative',  name: 'Creative',  color: '#9333EA' },
  { key: 'physical',  name: 'Physical',  color: '#DC2626' },
  { key: 'mental',    name: 'Mental',    color: '#2563EB' },
  { key: 'spiritual', name: 'Spiritual', color: '#F59E0B' },
  { key: 'balanced',  name: 'Balanced',  color: '#10B981' },
  { key: 'rest',      name: 'Rest',      color: '#64748B' },
] as const;

// The eight activity types each lunar day is rated against.
export const ACTIVITIES = [
  'Creative Work',
  'Physical Work',
  'Mental Work',
  'Meditation & Spirituality',
  'Sports & Fitness',
  'Business & Finance',
  'Learning & Education',
  'Social Activities',
] as const;

export const WIDGETS = [
  { name: 'Lunar Day',      size: 'Small',  what: "Today's lunar day, phase and top activities." },
  { name: 'Lunar Week',     size: 'Small',  what: 'The current week with phases and ratings.' },
  { name: 'Lunar Calendar', size: 'Medium', what: "Today's reading beside the full month grid." },
] as const;

export const SCREENSHOTS = [
  { src: '/screenshots/calendar-filter.webp', w: 620, h: 1347, alt: 'The September calendar filtered by Creative Work, every day shaded and starred for how well it suits creative work.' },
  { src: '/screenshots/today.webp',           w: 620, h: 1146, alt: "The Today screen showing the waning crescent, lunar day 25, 33 per cent illumination and the day's ranked activities." },
  { src: '/screenshots/calendar.webp',        w: 620, h: 1347, alt: 'The month grid with each day coloured by its energy type, and the activity filter below it.' },
  { src: '/screenshots/diary.webp',           w: 620, h: 1347, alt: 'The My Experience tab, rating how yesterday went for each recommended activity.' },
] as const;
