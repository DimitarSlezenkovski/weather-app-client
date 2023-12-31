import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthClientApi } from "./AuthClientApi";
import { Observable } from "rxjs";
import { AuthState } from "../state/AuthState";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authState: AuthState) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem("token")
        const isLoggedIn = this.authState.isLoggedIn();

        if (isLoggedIn && token) {
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${token}`}
            })
        }

        return next.handle(request);
    }
}