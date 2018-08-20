import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  redirect(rout){
    let r = '/' + rout
    this.router.navigate([r]);
  }

}
