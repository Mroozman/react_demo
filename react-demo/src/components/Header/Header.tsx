import styles from './Header.module.css';
import Languages from './Languages';
import HeaderMenu from './HeaderMenu';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Header = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Link className={styles.logoLink} to="/" data-testid="reactLogo">
            <img
              className={styles.logoPicture}
              alt={t('alt.react') as string}
              src={require('../../images/reactLogo.png')}
            />
            <p className={styles.logoText}>REACT-DEMO</p>
          </Link>
        </div>
        <span className={styles.menu}>
          <HeaderMenu />
        </span>
        <span className={styles.languages}>
          <Languages />
        </span>
      </div>
    </>
  );
};
export default Header;
