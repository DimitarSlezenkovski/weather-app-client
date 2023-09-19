import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule, NgFor } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { WeatherSearchComponent } from '../SearchWeather/weather-search.component';

@Component({
  selector: 'weather-forecast',
  templateUrl: './weather-forecast.template.html',
  styleUrls: ['./weather-forecast.styles.css'],
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    WeatherSearchComponent,
    MatGridListModule,
  ],
})
export class WeatherForecastComponent implements OnInit {
  ngOnInit(): void {}
}
