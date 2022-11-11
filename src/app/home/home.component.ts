import {Component} from '@angular/core';
import {SideNavToggle} from "../interfaces/sidenav-toggle";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  isSideNavCollapsed = false;
  screenWidth= 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
