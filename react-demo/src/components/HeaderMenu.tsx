import styles from './HeaderMenu.module.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const HeaderMenu = () => {
  const { t } = useTranslation();
  return (
    <>
      <Link to="about" className={styles.menuButton}>
        {t('about')}
      </Link>
      <Link to="api" className={styles.menuButton}>
        API
      </Link>
      <Link to="gallery" className={styles.menuButton}>
        {t('gallery')}
      </Link>
      <Link to="contact" className={styles.menuButton}>
        {t('contact')}
      </Link>
    </>
  );
};
export default HeaderMenu;
