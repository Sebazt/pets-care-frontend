import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetwalkerComponent } from './petwalker/petwalker.component';
import { PetdaycareComponent } from './petdaycare/petdaycare.component';
import { PetgroomingComponent } from './petgrooming/petgrooming.component';
import {MainComponent} from "./main/main.component";
import {HomeComponent} from "./home.component";
import {AboutusComponent} from "./aboutus/aboutus.component";

const routes: Routes = [
  {
    path: '',
    component:  HomeComponent,
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
        path: '',
        redirectTo: '/home/main',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: '/home/main',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
