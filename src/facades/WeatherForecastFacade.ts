import { Injectable, NgModule } from '@angular/core';
import { AuthClientApi } from 'src/core/api/AuthClientApi';
import { WeatherForecastApiClient } from 'src/core/api/WeatherForecastApiClient';
import { AuthState } from 'src/core/state/AuthState';
import { WeatherForecastState } from 'src/core/state/WeatherForecastState';
import { ILoginRequest } from 'src/interfaces/ILoginRequest';
import { IRegisterRequest } from 'src/interfaces/IRegisterRequest';
import { WeatherForecastData } from 'src/interfaces/IWeatherForecastData';

@NgModule()
@Injectable()
export class WeatherForecastFacade {
  constructor(
    private weatherForecastApiClient: WeatherForecastApiClient,
    private weatherForecastState: WeatherForecastState
  ) {}

  getWeatherForecastData() {
    return this.weatherForecastState.getWeatherForecastData();
  }

  isSuccessful() {
    return this.weatherForecastState.isSuccessful()
  }

  getMessage() {
    return this.weatherForecastState.getMessage();
  }

  getWeatherForecastByCity(city: string) {
    return this.weatherForecastApiClient.getWeatherForecastByCity(city).subscribe((res) => {
      if (res !== null) {
        this.weatherForecastState.setForecastData(res.weatherForecastData);
        this.weatherForecastState.setIsSuccessful(res.success);
        this.weatherForecastState.setMessage(res.message);
      } else {
        this.weatherForecastState.setIsSuccessful(res.success);
        this.weatherForecastState.setMessage(res.message);
      }
    });
  }
}
