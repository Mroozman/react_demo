import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const options = {
  order: ['navigator'],
};

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    detection: options,
    resources: {
      en: {
        translation: {
          init: 'Init message translation',
        },
      },
      pl: {
        translation: {
          init: 'wiadomość powitalna',
        },
      },
    },
  });
