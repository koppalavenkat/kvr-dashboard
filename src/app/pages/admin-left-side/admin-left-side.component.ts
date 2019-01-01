import { Component, OnInit } from '@angular/core';
declare var require: any;
@Component({
  selector: 'app-admin-left-side',
  templateUrl: './admin-left-side.component.html',
  styleUrls: ['./admin-left-side.component.scss']
})
export class AdminLeftSideComponent implements OnInit {
public userImage: String = 'assets/img/user2-160x160.jpg';
public menuList: any;
  constructor() { }

  ngOnInit() {
   this.menuList = require('./left-menu.json');
  }

}
