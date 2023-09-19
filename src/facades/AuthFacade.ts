import { Injectable, NgModule } from '@angular/core';
import { AuthClientApi } from 'src/core/api/AuthClientApi';
import { AuthState } from 'src/core/state/AuthState';
import { ILoginRequest } from 'src/interfaces/ILoginRequest';
import { IRegisterRequest } from 'src/interfaces/IRegisterRequest';

@NgModule()
@Injectable()
export class AuthFacade {
  constructor(
    private authApiClient: AuthClientApi,
    private authState: AuthState
  ) {}

  isLoggedIn() {
    return this.authState.isLoggedIn();
  }

  isRegisterSuccessful() {
    return this.authState.isRegistered();
  }

  getRegisterMessage() {
    return this.authState.getRegisterMessage$();
  }

  login(request: ILoginRequest) {
    return this.authApiClient.login(request).subscribe((res) => {
      if (res !== '') {
        localStorage.setItem('token', res);
        this.authState.setIsLoggedIn(true);
      } else {
        this.authState.setIsLoggedIn(false);
      }
    });
  }

  register(request: IRegisterRequest) {
    return this.authApiClient.register(request)
    .subscribe(res => {
        this.authState.setIsRegistered(res.success)
        this.authState.setRegisterMessage(res.message)
    })
  }
}
