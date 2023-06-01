import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { defaultNS } from '../i18n/i18n';
import { en } from './en';
import { pl } from './pl';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',

  ns: defaultNS,
  defaultNS: defaultNS,

  debug: true,

  resources: { en, pl },
});

export default i18n;
