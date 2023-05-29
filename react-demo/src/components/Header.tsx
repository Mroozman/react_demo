import { useTranslation } from 'react-i18next';
import styles from './Header.module.css';
import Languages from './Languages';
import HeaderMenu from './HeaderMenu';
const Header = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <img
            className={styles.logoPicture}
            src={require('../images/reactLogo.png')}
          />
          <p className={styles.logoText}>REACT-DEMO</p>
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
