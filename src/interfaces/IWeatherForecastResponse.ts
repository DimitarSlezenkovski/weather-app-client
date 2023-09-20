import { WeatherForecastData } from './IWeatherForecastData';

export interface IWeatherForecastResponse {
  weatherForecastData: WeatherForecastData;
  success: boolean;
  message: string;
}
