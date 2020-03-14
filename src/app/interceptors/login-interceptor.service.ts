import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHeaders, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from "rxjs/Observable";

@Injectable({
  providedIn: "root"
})
export class LoginInterceptorService {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const headers = new HttpHeaders({
      Accept: "application/json",
      App: "APP_BCK",
      Password: req.body.Password
    });


    const modifiedReq = req.clone({
      headers
    });
    return next.handle(modifiedReq);
  }
}
