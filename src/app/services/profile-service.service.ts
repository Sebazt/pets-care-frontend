import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../assets/utils/interfaces/user.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  url = 'https://beesoftlabs-team-2-production.up.railway.app/api/users/email';

  constructor(
    private readonly http: HttpClient
  ) {
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

}
