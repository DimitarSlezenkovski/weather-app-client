import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

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

  onSubmit(): void {}

  get isCityFound() {
    return false;
  }

  public isEmpty(field: string): boolean {
    return this.searchByCity.get(field)?.getRawValue() === '';
  }

  ngOnInit(): void {}
}
