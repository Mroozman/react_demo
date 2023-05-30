import styles from './HeaderMenu.module.css';
import { useTranslation } from 'react-i18next';

const HeaderMenu = () => {
  const { t } = useTranslation();
  return (
    <>
      <button className={styles.menuButton}>{t('home')}</button>
      <button className={styles.menuButton}>{t('about')}</button>
      <button className={styles.menuButton}>API</button>
      <button className={styles.menuButton}>{t('gallery')}</button>
      <button className={styles.menuButton}>{t('contact')}</button>
    </>
  );
};
export default HeaderMenu;
