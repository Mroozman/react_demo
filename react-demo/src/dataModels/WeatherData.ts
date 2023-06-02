class WeatherData {
  temperature: number;
  windSpeed: number;
  windDirection: number;
  windDirectionName: string;
  constructor(temperature: number, windSpeed: number, windDirection: number) {
    this.temperature = temperature;
    this.windSpeed = windSpeed;
    this.windDirection = windDirection;
    this.windDirectionName = this.calculateWindDirectionName(
      this.windDirection
    );
  }

  private calculateWindDirectionName = (windDirection: number): string => {
    let directionOfWind = '';
    if (windDirection < 22.5) {
      directionOfWind = 'north';
    } else if (windDirection < 67.5) {
      directionOfWind = 'northeast';
    } else if (windDirection < 112.5) {
      directionOfWind = 'east';
    } else if (windDirection < 157.5) {
      directionOfWind = 'southeast';
    } else if (windDirection < 202.5) {
      directionOfWind = 'south';
    } else if (windDirection < 247.5) {
      directionOfWind = 'southwest';
    } else if (windDirection < 292.5) {
      directionOfWind = 'west';
    } else if (windDirection < 337.5) {
      directionOfWind = 'northwest';
    } else if (windDirection < 360) {
      directionOfWind = 'north';
    }
    return directionOfWind;
  };
}

export default WeatherData;
