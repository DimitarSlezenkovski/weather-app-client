import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    CommonModule,
    RouterModule
  ],
})
export class SignInComponent implements OnInit {
  signInForm = new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl(''),
  });

  onSubmit(): void {}

  get isEmailValid() {
    return this.signInForm.get('email').invalid;
  }

  get isPasswordTouched() {
    return this.signInForm.get('password').touched;
  }

  public isEmpty(field: string): boolean {
    return this.signInForm.get(field)?.getRawValue() === '';
  }

  ngOnInit(): void {
  }
}
