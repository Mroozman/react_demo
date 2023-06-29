import styles from './HeaderMenu.module.css';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const HeaderMenu = () => {
  const { t } = useTranslation();

  return (
    <nav id="navbar">
      <NavLink
        to="about"
        className={({ isActive }) =>
          isActive ? styles.menuButtonActive : styles.menuButton
        }
        data-testid="about"
      >
        {t('about')}
      </NavLink>
      <NavLink
        to="api"
        className={({ isActive }) =>
          isActive ? styles.menuButtonActive : styles.menuButton
        }
        data-testid="api"
      >
        API
      </NavLink>
      <NavLink
        to="gallery"
        className={({ isActive }) =>
          isActive ? styles.menuButtonActive : styles.menuButton
        }
        data-testid="gallery"
      >
        {t('gallery')}
      </NavLink>
      <NavLink
        to="contact"
        className={({ isActive }) =>
          isActive ? styles.menuButtonActive : styles.menuButton
        }
        data-testid="contact"
      >
        {t('contact')}
      </NavLink>
    </nav>
  );
};
export default HeaderMenu;
