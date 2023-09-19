import { Injectable, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ILoginRequest } from 'src/interfaces/ILoginRequest';
import { IRegisterRequest } from 'src/interfaces/IRegisterRequest';

@NgModule()
@Injectable()
export class AuthState {
  private isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private isRegistered$ = new BehaviorSubject<boolean>(false);
  private message$ = new BehaviorSubject<string>("");

  isLoggedIn() {
    return this.isLoggedIn$.asObservable();
  }

  setIsLoggedIn(isLoggedIn: boolean) {
    this.isLoggedIn$.next(isLoggedIn);
  }

  isRegistered() {
    return this.isRegistered$.asObservable();
  }

  getRegisterMessage$() {
    return this.message$.asObservable();
  }

  setRegisterMessage(message: string) {
    this.message$.next(message);
  }

  setIsRegistered(isRegistered: boolean) {
    this.isRegistered$.next(isRegistered);
  }
}
