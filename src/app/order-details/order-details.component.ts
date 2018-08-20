import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  order = null;
  orderDetails = null;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.http.get<any>('http://northwind.servicestack.net/customers/' + id + '?format=json').subscribe(dtl => {
      console.log(dtl);
      this.order = dtl.Order;
      this.orderDetails = dtl.OrderDetails
    }, err => {
      console.log(err);
    });
  }

}
