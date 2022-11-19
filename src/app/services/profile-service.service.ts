import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../assets/utils/interfaces/user.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  id = ''

  url = 'https://beesoftlabs-team-2-production.up.railway.app/api/users/email';

  urlPatch = 'https://beesoftlabs-team-2-production.up.railway.app/api/users';

  constructor(
    private readonly http: HttpClient
  ) {
    this.getUser().subscribe({
      next: r => {
        this.id = r.id
      }
    })
  }

  getUser(): Observable<User> {
    const email = localStorage.getItem('email');
    const auth_token = localStorage.getItem('user');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    return this.http.get<User>(
      `${this.url}/${email}`,
      {headers: headers});
  }

  editProfile(newUser: any) {
    const auth_token = localStorage.getItem('user');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });

    let body = JSON.stringify(newUser)

    return this.http.patch<User>(
      `${this.urlPatch}/${this.id}`,
      body,
      {headers: headers}).subscribe({
      next: r => {
        if(r) {alert('Perfil actualizado')}
      }
    })
  }

}
