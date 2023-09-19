import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './SignUp/sign-up.component';
import { SignInComponent } from './SignIn/sign-in.component';
import { BrowserModule } from '@angular/platform-browser';
import { WeatherForecastComponent } from './WeatherForecast/weather-forecast.component';
import { NavbarComponent } from './Navbar/navbar.component';
import { LayoutComponent } from './Layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: SignInComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'weather-forecast',
    component: LayoutComponent,
  },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
