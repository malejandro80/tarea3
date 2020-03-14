import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: "app-grilla",
  templateUrl: "./grilla.component.html",
  styleUrls: ["./grilla.component.css"]
})
export class GrillaComponent implements OnInit {
  bookings: any;
  token: string;

  constructor(bookings: BookingService) {
    this.bookings = bookings;
  }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    let bookingdata = {
      adminemail: "testapis@tuten.cl",
      email: "contacto@tuten.cl",
      current: true,
      token: this.token,
      app: "APP_BCK"
    };


    this.bookings.getbookings(bookingdata).subscribe(data => console.log('aqui'));

  }


}
