export interface WeatherForecastData {
  city: City;
  weatherForecasts: WeatherForecast[];
}

interface City {
  id: number;
  name: string;
  country: string;
}

interface WeatherForecast {
  dateTime: string;
  main: Main;
  weather: Weather[];
  wind: Wind;
}

interface Main {
  temp: number;
  feelsLike: number;
  tempMin: number;
  tempMax: number;
  humidity: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
}

interface Wind {
  speed: number;
}
