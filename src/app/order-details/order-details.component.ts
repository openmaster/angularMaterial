import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  order;
  orderDetail;
  errMessage;
  displayedColumns = ['OrderId', 'ProductId', 'Discount', 'Quantity', 'UnitPrice'];
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    if(localStorage.getItem('Order') ) {
      if (JSON.parse(localStorage.getItem('Order')).Order.Id.toString() !== id.toString())
      {
        this.errMessage = " ERROR !! No such Order."
        return

      }
      this.order = JSON.parse(localStorage.getItem('Order'))
      this.orderDetail = new MatTableDataSource(this.order.OrderDetails);
      this.orderDetail.sort = this.sort;
      this.orderDetail.paginator  = this.paginator;
    } else {
      this.errMessage = " ERROR !! No such Order."
    }
  }

}
