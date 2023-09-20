import { Injectable, NgModule } from '@angular/core';
import apiUrl from './apiUrl';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { weatherForecastUri } from './Uris';
import { IWeatherForecastResponse } from 'src/interfaces/IWeatherForecastResponse';

@NgModule()
@Injectable()
export class WeatherForecastApiClient {
  constructor(private httpClient: HttpClient) {}

  getWeatherForecastByCity(city: string): Observable<IWeatherForecastResponse> {
    return this.httpClient.get<IWeatherForecastResponse>(
      `${apiUrl.apiUrl}${weatherForecastUri}?=${city}`
    );
  }
}
