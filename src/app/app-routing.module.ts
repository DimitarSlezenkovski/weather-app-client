import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './SignUp/sign-up.component';
import { SignInComponent } from './SignIn/sign-in.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: "signup",
    component: SignUpComponent,
  },
  {
    path: "",
    component: SignInComponent,
  }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
