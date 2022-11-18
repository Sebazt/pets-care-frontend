import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth'
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private readonly  auth: AngularFireAuth
  ) {
    this.auth.authState.subscribe({
      next: user => {
        console.log('Estado del usuario: ', user?.getIdTokenResult().then(r => {
          localStorage.removeItem('user');
          localStorage.setItem('user', r.token)
        }))
        if(!user) {return}

        this.usuario.nombre = user.displayName;
        this.usuario.uid = user.uid;
      }
    });
  }

  usuario: any = {}

  async login( proveedor: string ) {
    await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  async logout() {
    await this.auth.signOut();
  }
}
