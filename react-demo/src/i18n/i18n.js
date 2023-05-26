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
          polish: 'polish',
          english: 'english',
          home: 'Home',
          about: 'About',
          gallery: 'Gallery',
          contact: 'Contact',
        },
      },
      pl: {
        translation: {
          polish: 'polski',
          english: 'angielski',
          home: 'Start',
          about: 'O mnie',
          gallery: 'Galeria',
          contact: 'Kontakt',
        },
      },
    },
  });
