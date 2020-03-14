import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class BookingService {

  constructor(private http: HttpClient) {}

  data = {
        adminemail: '',
        email: '',
        current: '',
        token: '',
        app: '',
        Password: ''
      };

  savedata(datos) {
    this.data = datos;
  }

  getbookings(form) {
    const url = `https://dev.tuten.cl:443/TutenREST/rest/user/contacto%40tuten.cl/bookings?current=true`;
    const headers = new HttpHeaders({
         'adminemail' : form.adminemail,
         'token': form.token,
         'app' : form.app
       });

    return this.http.get(url, {headers});
  }
}
