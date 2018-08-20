import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {CustomersDetailModel} from './customerdetail.model';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customer =  null;
  customerOrders = null;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.http.get<CustomersDetailModel>('http://northwind.servicestack.net/customers/' + id + '?format=json').subscribe(dtl => {
      console.log(dtl);
      //console.log(dtl);
      this.customer = dtl.Customer;
      this.customerOrders = dtl.CustomerOrders
    }, err => {
      console.log(err);
    });
  }

}
