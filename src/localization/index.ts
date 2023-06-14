import { configureLocalization } from '@lit/localize';
import {
  sourceLocale,
  targetLocales,
  allLocales
} from './locale-codes';

import * as ru from './locales/ru';
import * as sr from './locales/sr';

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

export const changeLocale = async (lang: string) => {
  try {
    await setLocale(lang.slice(0, 2));
    try {
      localStorage.setItem('locale', lang.slice(0, 2));
    }
    catch {
      console.warn(`bus-plus: localStorage is not available`);
    }
  }
  catch {
    console.warn(`bus-plus: unsupported locale: ${lang}`);
  }
};

export const locales = allLocales;
