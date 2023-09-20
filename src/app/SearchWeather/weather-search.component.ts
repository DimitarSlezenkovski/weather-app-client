import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { WeatherForecastFacade } from 'src/facades/WeatherForecastFacade';

@Component({
  selector: 'weather-search',
  templateUrl: './weather-search.template.html',
  styleUrls: ['./weather-search.styles.css'],
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    CommonModule,
    RouterModule,
    MatIconModule,
  ],
})
export class WeatherSearchComponent implements OnInit {
  searchByCity = new FormGroup({
    city: new FormControl('', [Validators.required]),
  });

  isCityFound$: boolean = true;

  constructor(private weatherForecastFacade: WeatherForecastFacade) {}

  onSubmit(): void {
    const city = this.searchByCity.controls['city'].value;
    this.weatherForecastFacade.getWeatherForecastByCity(city);
    this.weatherForecastFacade.isSuccessful().subscribe(res => {
      this.isCityFound$ = res
    })
  }

  get isCityFound() {
    return this.isCityFound$;
  }

  public isEmpty(field: string): boolean {
    return this.searchByCity.controls[field].value === '';
  }

  ngOnInit(): void {}
}
