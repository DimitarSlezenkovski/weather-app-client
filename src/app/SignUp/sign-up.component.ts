import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    CommonModule,
    RouterModule,
  ],
})
export class SignUpComponent implements OnInit {
  signUpForm = new FormGroup({
    fistName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl(''),
  });

  onSubmit(): void {}

  get isEmailValid() {
    return this.signUpForm.get('email').invalid;
  }

  get isPasswordTouched() {
    return this.signUpForm.get('password').touched;
  }

  public isEmpty(field: string): boolean {
    return this.signUpForm.get(field)?.getRawValue() === '';
  }

  ngOnInit(): void {}
}
