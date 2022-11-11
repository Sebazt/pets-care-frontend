import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SignupComponent} from "./pages/signup/signup.component";
import {SigninComponent} from "./pages/signin/signin.component";
import {HomeModule} from "./home/home.module";
import {CommonComponentsModule} from "./common-components/common-components.module";
import {RouterModule} from "@angular/router";
import {PipesModule} from "./pipes";

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeModule,
    RouterModule,
    CommonComponentsModule,
    PipesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
