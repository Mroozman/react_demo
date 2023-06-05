import styles from './APILayout.module.css';
import APISection from '../components/ApiPage/APISection';

const APILayout = () => {
  return <APISection />;
};
export default APILayout;

export async function loader() {
  const response = await fetch(
    'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current_weather=true&forecast_days=1&timezone=Europe%2FBerlin'
  );
  const apiWeatherData = await response.json();

  if (!response.ok || !apiWeatherData) {
    throw new Error('Not found');
  }

  return apiWeatherData.current_weather;
}
