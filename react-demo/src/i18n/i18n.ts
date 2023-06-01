import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { en } from './en';
import { pl } from './pl';

const options = {
  order: ['navigator'],
};

export const defaultNS = 'ns1';

i18next.use(initReactI18next).use(LanguageDetector).init({
  fallbackLng: 'en',
  detection: options,
  resources: { en, pl },
});

export default i18next;
