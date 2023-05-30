import styles from './Header.module.css';
import Languages from './Languages';
import HeaderMenu from './HeaderMenu';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Link className={styles.logoLink} to="/">
            <img
              className={styles.logoPicture}
              src={require('../images/reactLogo.png')}
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
