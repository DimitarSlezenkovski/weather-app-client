import { Injectable, NgModule } from '@angular/core';
import apiUrl from './apiUrl';
import { HttpClient } from '@angular/common/http';
import { ILoginRequest } from 'src/interfaces/ILoginRequest';
import { Observable } from 'rxjs';
import { IRegisterResponse } from 'src/interfaces/IRegisterResponse';
import { loginUri, registerUri } from './Uris';
import { IRegisterRequest } from 'src/interfaces/IRegisterRequest';

@NgModule()
@Injectable()
export class AuthClientApi {

  constructor(private httpClient: HttpClient) {}

  login(loginRequest: ILoginRequest): Observable<string> {
    return this.httpClient.post<string>(loginUri, loginRequest);
  }

  register(registerRequest: IRegisterRequest): Observable<IRegisterResponse> {
    return this.httpClient.post<IRegisterResponse>(registerUri, registerRequest);
  }
}
