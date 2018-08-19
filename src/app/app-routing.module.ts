import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'customers', component: CustomersComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
]
@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
