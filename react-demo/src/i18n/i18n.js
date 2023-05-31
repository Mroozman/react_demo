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
          aboutMe:
            "Hello, I'am front-end developer from Poland who loves music, board and video games. I have some experience with Angular2+ framework, but right now I'am focused on React library. Also I was coding a little in Unity with a C#, but nothing too big. In my free time I play guitar and record music.",
          github: 'My repository on github',
          cv: 'Download my curriculum vitae',
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
          aboutMe:
            "Witaj, jestem programistą front-end z Polski, kocham muzykę, oraz gry planszowe i komputerowe. Mam pewne doświadczenie z framework'iem Angular2+, jednak teraz skupiam się głównie na bibliotece React. Kodowałem również w Unity za pomocą języka C#, ale nic dużego. W wolnym czasie gram na gitarze i nagrywam muzykę.",
          github: 'Moje repozytorium na githubie',
          cv: 'Pobierz moje curriculum vitae',
        },
      },
    },
  });
