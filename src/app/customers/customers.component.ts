import { Component, OnInit, ViewChild } from '@angular/core';
//import { JsonServiceClient } from '@servicestack/client';
import { HttpClient} from '@angular/common/http';
// Material design
//import {MatTableModule} from '@angular/material/table';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

// Data model
import {CustomersModel} from './customer.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  Customers;
  displayedColumns = ['Id', 'ContactName', 'ContactTitle', 'CompanyName', 'Phone'];
  constructor(private http: HttpClient) { }
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {

    //var client = new JsonServiceClient("http://northwind.servicestack.net");
    //var cust = client.get('/customers?format=json');
    this.http.get<CustomersModel[]>('http://northwind.servicestack.net/customers?format=json').subscribe(cust => {
      this.Customers = new MatTableDataSource(cust.Customers);
      this.Customers.sort = this.sort;
      this.Customers.paginator  = this.paginator;
      console.log(cust.Customers);
    }, err => {
      console.log(err);
    });

  }

}
