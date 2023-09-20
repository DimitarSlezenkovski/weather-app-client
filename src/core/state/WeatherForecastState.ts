import { Injectable, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WeatherForecastData } from 'src/interfaces/IWeatherForecastData';

@NgModule()
@Injectable()
export class WeatherForecastState {
  private weatherForecast = new BehaviorSubject<WeatherForecastData>(null);
  private isSuccess$ = new BehaviorSubject<boolean>(false);
  private message$ = new BehaviorSubject<string>("");

  getWeatherForecastData() {
    return this.weatherForecast.asObservable();
  }

  setForecastData(weatherForecast: WeatherForecastData) {
    this.weatherForecast.next(weatherForecast);
  }

  isSuccessful() {
    return this.isSuccess$.asObservable();
  }

  setIsSuccessful(success: boolean) {
    this.isSuccess$.next(success);
  }

  getMessage() {
    return this.message$.asObservable();
  }

  setMessage(message: string) {
    this.message$.next(message);
  }
}
