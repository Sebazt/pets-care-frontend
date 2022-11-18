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
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import { FIREBASE_OPTIONS } from '@angular/fire/compat';


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
    PipesModule,
    FormsModule,
    HttpClientModule,
    AngularFireAuthModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
  ],
})
export class AppModule { }
