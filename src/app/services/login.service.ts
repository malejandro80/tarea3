import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "./../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


   login(form) {
    const url = `https://dev.tuten.cl:443/TutenREST/rest/user/${form.email}`;


    const body  = {
      'Password': form.Password
    };

    return this.http.put(url, body);
  }
}

