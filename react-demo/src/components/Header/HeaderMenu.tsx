import styles from './HeaderMenu.module.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const HeaderMenu = () => {
  const { t } = useTranslation();
  return (
    <>
      <Link to="about" className={styles.menuButton} data-testid="about">
        {t('about')}
      </Link>
      <Link to="api" className={styles.menuButton} data-testid="api">
        API
      </Link>
      <Link to="gallery" className={styles.menuButton} data-testid="gallery">
        {t('gallery')}
      </Link>
      <Link to="contact" className={styles.menuButton} data-testid="contact">
        {t('contact')}
      </Link>
    </>
  );
};
export default HeaderMenu;
