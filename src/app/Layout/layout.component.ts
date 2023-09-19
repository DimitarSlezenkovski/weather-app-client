import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../Navbar/navbar.component';
import { WeatherForecastComponent } from '../WeatherForecast/weather-forecast.component';

@Component({
  selector: 'layout',
  templateUrl: 'layout.template.html',
  styleUrls: ['layout.styles.css'],
  standalone: true,
  imports: [NavbarComponent, WeatherForecastComponent],
})
export class LayoutComponent implements OnInit {
  ngOnInit(): void {}
}
