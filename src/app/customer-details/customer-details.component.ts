import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {_} from 'underscore';
// Data model
import {CustomersDetailModel} from './customerdetail.model';
// Material design Modules
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customer;
  Orders;
  CustomersOrders;
  OrderDetail;
  displayedColumns = ['Id', 'CustomerId', 'EmployeeId', 'Freight', 'OrderDate'];
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.http.get<CustomersDetailModel>('http://northwind.servicestack.net/customers/' + id + '?format=json').subscribe(dtl => {
      //console.log(dtl.CustomerOrders);
      this.customer = dtl.Customer;
      this.Orders = dtl.CustomerOrders
      this.CustomersOrders = new MatTableDataSource(_.pluck(dtl.CustomerOrders, 'Order'));
      this.CustomersOrders.sort = this.sort;
      this.CustomersOrders.paginator  = this.paginator;
    }, err => {
      console.log(err);
    });
  }
  getToOrderDetail(order) {
    let OrderDetail;
    this.OrderDetail = _.filter(this.Orders, (r) => r.Order.Id === order.Id)
    localStorage.setItem('Order', JSON.stringify(this.OrderDetail[0]));
  }
}
