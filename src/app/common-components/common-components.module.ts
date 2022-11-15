import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import {ShapeDividerComponent} from "./shape-divider/shape-divider.component";
import {AddPetComponent} from "./add-pet/add-pet.component";
import {FormsModule} from "@angular/forms";
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import {ProfileService} from "../services/profile-service.service";

const components = [
  SidenavComponent,
  SublevelMenuComponent,
  ShapeDividerComponent,
  AddPetComponent,
  EditProfileComponent
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
  providers: [
    ProfileService
  ]
})
export class CommonComponentsModule {
}
