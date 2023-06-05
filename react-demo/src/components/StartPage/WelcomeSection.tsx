import styles from './WelcomeSection.module.css';
import { useTranslation } from 'react-i18next';
const WelcomeSection = () => {
  const { t } = useTranslation();
  const welcomeTextStyles = `center ${styles.welcomeSectionTexts}`;
  return (
    <>
      <div className={styles.welcomeSection}>
        <div className="left"></div>
        <div className={welcomeTextStyles}>
          <h2 data-testid="welcomeTitle">{t('welcomeTextTitle')}</h2>
          <p data-testid="welcomeText">{t('welcomeText')}</p>
        </div>
        <div className="right"></div>
      </div>
      <span className={styles.underline}>
        <hr />
      </span>
    </>
  );
};
export default WelcomeSection;
