import type { Locale } from '../../site-pages';
import type { LunarDaysCopy } from '../types';
import { en } from './en';
import { de } from './de';

// Only the locales listed for `lunar-days` in src/site-pages.ts.
export const LUNAR_DAYS_COPY: Partial<Record<Locale, LunarDaysCopy>> = { en, de };
