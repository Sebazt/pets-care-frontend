import { Component, OnInit } from '@angular/core';
import { navbarData } from './nav-data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  public collapsed: boolean = true;
  public navData = navbarData;
  constructor() {}

  ngOnInit(): void {}

  public toggleCollapse():void{
    this.collapsed = !this.collapsed;
  }

  public closeSidenav():void {
    this.collapsed = false;
  }
}
