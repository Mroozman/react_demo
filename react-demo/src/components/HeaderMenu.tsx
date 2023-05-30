import styles from './HeaderMenu.module.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const HeaderMenu = () => {
  const { t } = useTranslation();
  return (
    <>
      <Link to="/" className={styles.menuButton}>
        {t('home')}
      </Link>
      <Link to="about" className={styles.menuButton}>
        {t('about')}
      </Link>
      <button className={styles.menuButton}>API</button>
      <button className={styles.menuButton}>{t('gallery')}</button>
      <button className={styles.menuButton}>{t('contact')}</button>
    </>
  );
};
export default HeaderMenu;
