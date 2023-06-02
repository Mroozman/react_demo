import styles from './APISection.module.css';
import { useLoaderData } from 'react-router-dom';
import WeatherData from '../dataModels/WeatherData';
import ApiWeatherData from '../dataModels/ApiWeatherData';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
const APISection = () => {
  const { t } = useTranslation();
  const apiData: ApiWeatherData = useLoaderData() as ApiWeatherData;
  const weatherData: WeatherData = new WeatherData(
    apiData.temperature,
    apiData.windspeed,
    apiData.winddirection
  );

  const windDirection = t(weatherData.windDirectionName);

  return (
    <div className={styles.apiSectionWrapper}>
      <div className="left"></div>
      <div className={styles.apiSection}>
        <h2 className={styles.title}>{t('apiTitle')}</h2>
        <div className={styles.dataApiSection}>
          <div className={styles.weatherModule}>
            <p className={styles.timezone}>{t('timeZone')}</p>
            <p className={styles.weatherInfo}>{`${t('temperature')} ${
              weatherData.temperature
            }\xB0C`}</p>
            <p className={styles.weatherInfo}>{`${t('windSpeed')} ${
              weatherData.windSpeed
            }Km/h`}</p>
            <p className={styles.weatherInfo}>{`${t(
              'windDirection'
            )} ${windDirection}`}</p>
            <Link
              className={styles.attributeLink}
              to="https://open-meteo.com/"
              target="_blank"
            >
              Weather data by Open-Meteo.com
              {/* Attributes are not translated */}
            </Link>
          </div>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};
export default APISection;
