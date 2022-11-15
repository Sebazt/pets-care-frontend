import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { PetwalkerComponent } from './petwalker/petwalker.component';
import { PetdaycareComponent } from './petdaycare/petdaycare.component';
import { PetgroomingComponent } from './petgrooming/petgrooming.component';
import { MainComponent } from './main/main.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes';
import { AdminComponent } from './admin/admin.component';
import { AboutServicesComponent } from './about-services/about-services.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule} from "@angular/forms";
import {ProfileComponent} from "./profile/profile.component";
import {ProfileService} from "../services/profile-service.service";
import {HttpClientModule} from "@angular/common/http";
import {CommentService} from "../services/comment.service";

const components = [
  HomeComponent,
  PetwalkerComponent,
  PetdaycareComponent,
  PetgroomingComponent,
  MainComponent,
  AboutusComponent,
  AdminComponent,
  AboutServicesComponent,
  ContactComponent,
  ProfileComponent,
];

@NgModule({
  declarations: [
    [...components
  ],
  ],
  imports: [
    CommonModule,
    CommonComponentsModule,
    HomeRoutingModule,
    RouterModule,
    PipesModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProfileService,
    CommentService
  ],
})
export class HomeModule {}
