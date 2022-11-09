import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesProductsComponent } from './services-products/services-products.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminComponent } from './admin/admin.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'servicies',
    loadChildren: () => import('./services-products/services-products.module').then(s => s.ServicesProductsModule)
    
  },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/' },
  { path: 'error', component: NotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
