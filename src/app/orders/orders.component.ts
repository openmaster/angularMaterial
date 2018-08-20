import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('http://northwind.servicestack.net/orders?format=json').subscribe(ords => {
      console.log(ords);
    }, err => {
      console.log(err);
    });

  }

}
