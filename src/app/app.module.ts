import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './SignIn/sign-in.component';
import { SignUpComponent } from './SignUp/sign-up.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from 'src/core/api/AuthInterceptor';
import { WeatherForecastComponent } from './WeatherForecast/weather-forecast.component';
import { AuthClientApi } from 'src/core/api/AuthClientApi';
import { AuthFacade } from 'src/facades/AuthFacade';
import { CoreModule } from 'src/core/core.module';
import { WeatherSearchComponent } from './SearchWeather/weather-search.component';
import { NavbarComponent } from './Navbar/navbar.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SignInComponent,
    SignUpComponent,
    WeatherSearchComponent,
    WeatherForecastComponent,
    HttpClientModule,
    CoreModule,
    NavbarComponent
  ],
  exports: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthClientApi,
    AuthFacade
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
