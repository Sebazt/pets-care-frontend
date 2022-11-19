import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetwalkerComponent } from './petwalker/petwalker.component';
import { PetdaycareComponent } from './petdaycare/petdaycare.component';
import { PetgroomingComponent } from './petgrooming/petgrooming.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminComponent } from './admin/admin.component';
import {AboutServicesComponent} from "./about-services/about-services.component";
import {ContactComponent} from "./contact/contact.component";
import {ProfileComponent} from "./profile/profile.component";
import {AddPetComponent} from "../common-components/add-pet/add-pet.component";
import {EditProfileComponent} from "../common-components/edit-profile/edit-profile.component";
import {BuyServiceComponent} from "../common-components/buy-service/buy-service.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'main',
        component: MainComponent,
      },

      {
        path: 'petwalker',
        component: PetwalkerComponent,
      },
      {
        path: 'petdaycare',
        component: PetdaycareComponent,
      },

      {
        path: 'petgrooming',
        component: PetgroomingComponent,
      },

      {
        path: 'aboutus',
        component: AboutusComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'admin',
        component: AdminComponent,
      }
      ,{
        path: 'aboutServices',
        component: AboutServicesComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'addPet',
        component: AddPetComponent,
      },
      {
        path: 'editProfile',
        component: EditProfileComponent,
      },
      {
        path: 'buyService',
        component: BuyServiceComponent,
      },
      {
        path: '',
        redirectTo: '/home/main',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: '/home/main',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
