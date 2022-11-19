import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth'
import firebase from 'firebase/compat/app';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../assets/utils/interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private readonly auth: AngularFireAuth,
    private readonly regist: HttpClient
  ) {
    this.auth.authState.subscribe({
      next: user => {
        console.log('Estado del usuario: ', user?.getIdTokenResult().then(r => {
          localStorage.removeItem('user');
          localStorage.setItem('user', r.token)
        }))
        if(!user) {return}
        if (user.email) {
          localStorage.setItem('email', user.email)
        }
        this.usuario.nombre = user.displayName;
        this.usuario.uid = user.uid;
      }
    });
  }

  usuario: any = {}

  async login(  ) {
    await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  async logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('email');
    await this.auth.signOut();
    window.location.reload();
  }
}
