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
          welcomeTextTitle: 'Welcome!',
          welcomeText:
            'My name is Maciej Mróz and this is a demo react frontend app I created to show my skills for recruiters. I hope you will enjoy the site and code :)',
          contactTitle: 'You can contact me via:',
          copied: 'Copied to clipboard!',
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
          welcomeTextTitle: 'Witaj!',
          welcomeText:
            'Nazywam się Maciej Mróz, a to jest demo aplikacji frontendowej, którą stworzyłem by pokazać moje umiejętności dla celów rekrutacji. Mam nadzieję że strona i kod się wam spodoba :)',
          contactTitle: 'Można się ze mną skontaktować poprzez:',
          copied: 'Skopiowano do schowka!',
        },
      },
    },
  });
