import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesProductsComponent } from './services-products/services-products.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'servicios', component: ServicesProductsComponent },
  { path: '', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/' },
  { path: 'error', component: NotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
