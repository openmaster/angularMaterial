import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { HomeComponent } from './home/home.component';

// Details components
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

const routes: Routes = [
  {path: 'customers', component: CustomersComponent},
  {path: 'customer/:id', component: CustomerDetailsComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'order/:id', component: OrderDetailsComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
]
@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
