import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthFacade } from 'src/facades/AuthFacade';
import { ILoginRequest } from 'src/interfaces/ILoginRequest';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.template.html',
  styleUrls: ['./sign-in.styles.css'],
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
export class SignInComponent implements OnInit {
  signInForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl(''),
  });

  constructor(private authFacade: AuthFacade, private router: Router) {}

  onSubmit(): void {
    const loginRequest: ILoginRequest = {
      email: this.signInForm.controls['email'].value,
      password: this.signInForm.controls['password'].value,
    };
    this.authFacade.login(loginRequest);
    this.authFacade.isLoggedIn().subscribe((res) => {
      if (res) {
        this.router.navigateByUrl('/weather-forecast');
      } else {
        this.router.navigateByUrl('/')
      }
    });
  }

  get isEmailValid() {
    return this.signInForm.get('email').invalid;
  }

  get isPasswordTouched() {
    return this.signInForm.get('password').touched;
  }

  public isEmpty(field: string): boolean {
    return this.signInForm.get(field)?.getRawValue() === '';
  }

  ngOnInit(): void {}
}
