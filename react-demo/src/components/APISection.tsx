import styles from './APISection.module.css';
import { useTranslation } from 'react-i18next';
import DrawCardApi from './DrawCardApi';
import WeatherApi from './WeatherApi';

const APISection = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.apiSectionWrapper}>
      <div className="left"></div>
      <div className={styles.apiSection}>
        <h2 className={styles.title}>{t('apiTitle')}</h2>
        <div className={styles.dataApiSection}>
          <div className={styles.apiBox}>
            <WeatherApi />
          </div>
          <div className={styles.apiBox}>
            <DrawCardApi />
          </div>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};
export default APISection;
