import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesProductsRoutingModule } from './services-products-routing.module';
import { ServicesProductsComponent } from './services-products.component';
import { PetwalkerComponent } from './petwalker/petwalker.component';
import { PetdaycareComponent } from './petdaycare/petdaycare.component';
import { PetgroomingComponent } from './petgrooming/petgrooming.component';


@NgModule({
  declarations: [
    ServicesProductsComponent,
    PetwalkerComponent,
    PetdaycareComponent,
    PetgroomingComponent
  ],
  imports: [
    CommonModule,
    ServicesProductsRoutingModule
  ]
})
export class ServicesProductsModule { }
