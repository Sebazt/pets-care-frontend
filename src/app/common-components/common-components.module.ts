import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import {ShapeDividerComponent} from "./shape-divider/shape-divider.component";
import {AddPetComponent} from "./add-pet/add-pet.component";
import {FormsModule} from "@angular/forms";

const components = [
  SidenavComponent,
  SublevelMenuComponent,
  ShapeDividerComponent,
  AddPetComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    RouterLinkActive,
    RouterLinkWithHref,
    FormsModule
  ],
  exports: [...components],
})
export class CommonComponentsModule {
}
