import { configureLocalization } from '@lit/localize';
import {
  sourceLocale,
  targetLocales,
  allLocales
} from './locale-codes';

import * as ru from './locales/ru.js';
import * as sr from './locales/sr.js';

const localizedTemplates = new Map([
  ['ru', ru],
  ['sr', sr]
])

export const { getLocale, setLocale } = configureLocalization({
  sourceLocale,
  targetLocales,
  // @ts-ignore
  loadLocale: async (lang: string) => localizedTemplates.get(lang)
});

export const currentLocale = () => {
  return getLocale();
};

export const changeLocale = async (lang: string, auto?: boolean) => {
  try {
    await setLocale(lang.slice(0, 2));
    if (!auto) {
      try {
        localStorage.setItem('locale', lang.slice(0, 2));
      }
      catch {
        console.warn(`bus-plus: localStorage is not available`);
      }
    }
  }
  catch {
    console.warn(`bus-plus: unsupported locale: ${lang}`);
  }
};

export const locales = allLocales;
