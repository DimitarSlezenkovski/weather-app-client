import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthFacade } from 'src/facades/AuthFacade';
import { IRegisterRequest } from 'src/interfaces/IRegisterRequest';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.template.html',
  styleUrls: ['./sign-up.styles.css'],
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

  message: string = "";
  success: boolean = true;

  signUpForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl(''),
  });

  constructor(private authFacade: AuthFacade, private router: Router) {

  }

  onSubmit(): void {
    console.log("works", this.signUpForm.controls['firstName'])
    const registerRequest: IRegisterRequest = {
      firstName: this.signUpForm.controls['firstName'].value,
      lastName: this.signUpForm.controls['lastName'].value,
      email: this.signUpForm.controls['email'].value,
      password: this.signUpForm.controls['password'].value
    }
    this.authFacade.register(registerRequest)
    let success = false;
    this.authFacade.isRegisterSuccessful().subscribe(res => {
      success = res
    }).unsubscribe()
    if (success) {
      this.router.navigateByUrl('/register-confirmed')
    } else {
      this.authFacade.getRegisterMessage().subscribe(res => {
        this.message = res
        this.success = false;
      });
    }
  }

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
