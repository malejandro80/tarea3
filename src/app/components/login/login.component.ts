import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from "@angular/router"
import { FormGroup, Validators, FormControl} from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  http: any;
  formLogin: FormGroup;
  booking: any;

  constructor(_http: LoginService, booking: BookingService, private router: Router) {
    this.booking = booking;
    this.http = _http;
  }


  ngOnInit(): void {
    this.generarFormulario();
  }

  generarFormulario(){
    this.formLogin = new FormGroup({
      email: new FormControl("", Validators.required),
      Password: new FormControl("", Validators.required)
    });
  }

  enviar(){
    let email = this.formLogin.value.email.split("@");
    email = email[0] + '%40' + email[1];
    let form = {
                  'email': email,
                  'Password': this.formLogin.value.Password
                }
    this.http.login(form).subscribe(data => {

      localStorage.setItem("token", data.sessionTokenBck);
      this.router.navigate(['/booking']);
    });
  }


}
