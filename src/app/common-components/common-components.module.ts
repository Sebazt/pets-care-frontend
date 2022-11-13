import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import {ShapeDividerComponent} from "./shape-divider/shape-divider.component";

const components = [
  SidenavComponent,
  SublevelMenuComponent,
  ShapeDividerComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    RouterLinkActive,
    RouterLinkWithHref
  ],
  exports: [...components],
})
export class CommonComponentsModule {
}
