import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetwalkerComponent } from './petwalker/petwalker.component';
import { PetdaycareComponent } from './petdaycare/petdaycare.component';
import { PetgroomingComponent } from './petgrooming/petgrooming.component';


const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesProductsRoutingModule { }
