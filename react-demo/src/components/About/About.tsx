import styles from './About.module.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.aboutSection}>
        <div className="left"></div>
        <div className={styles.about}>
          <img
            className={styles.myPhoto}
            alt={t('alt.me') as string}
            src={require('../../images/ja.jpg')}
          />
          <span className={styles.personalTexts}>
            <h2 className={styles.myName}>Maciej Mróz</h2>
            <p>{t('aboutMe')}</p>
          </span>
        </div>
        <div className="right"></div>
      </div>
      <div className={styles.infoLinks}>
        <Link
          className={styles.github}
          to="https://github.com/Mroozman"
          target="_blank"
        >
          {t('github')}
          <img
            className={styles.githubLogo}
            alt={t('alt.github') as string}
            src={require('../../images/github.png')}
          />
        </Link>
        <Link
          className={styles.cv}
          to="/files/MMCV.pdf"
          target="_blank"
          download
        >
          {t('cv')}
          <img
            className={styles.cvLogo}
            alt={t('alt.cv') as string}
            src={require('../../images/cv.png')}
          />
        </Link>
      </div>
    </>
  );
};
export default About;
