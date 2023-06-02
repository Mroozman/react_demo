import styles from './APISection.module.css';
import { useLoaderData } from 'react-router-dom';
import WeatherData from '../dataModels/WeatherData';
import ApiWeatherData from '../dataModels/ApiWeatherData';
const APISection = () => {
  const apiData: ApiWeatherData = useLoaderData() as ApiWeatherData;
  const wheatherData: WeatherData = new WeatherData(
    apiData.temperature,
    apiData.windspeed,
    apiData.winddirection
  );
  console.log(wheatherData);

  return <div></div>;
};
export default APISection;
