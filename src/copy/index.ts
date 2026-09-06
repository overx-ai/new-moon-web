import type { Locale } from '../site-pages';
import type { Copy } from './types';
import { en } from './en';
import { es } from './es';
import { de } from './de';
import { fr } from './fr';
import { ru } from './ru';

export const COPY: Record<Locale, Copy> = { en, es, de, fr, ru };
export type { Copy };
