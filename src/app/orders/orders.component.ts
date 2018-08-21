import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {_} from 'underscore';
// Data model
import {OrdersModel} from './orders.model';
// Material design
//import {MatTableModule} from '@angular/material/table';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  Orders;
  displayedColumns = ['Id', 'CustomerId', 'EmployeeId', 'Freight', 'OrderDate'];
  constructor(private http: HttpClient, private router: Router) { }
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.http.get<OrdersModel>('http://northwind.servicestack.net/orders?format=json').subscribe(ords => {
      //console.log(ords);
      this.Orders = new MatTableDataSource(_.pluck(ords.Results, 'Order'));
      this.Orders.sort = this.sort;
      this.Orders.paginator = this.paginator;
    }, err => {
      console.log(err);
    });

  }

}
