import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../assets/utils/interfaces/user.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  url = 'http://localhost:5001/api/users';

  id= 'ad4326c4-3c82-48d6-ac37-786e46d1a0ad'


  constructor(
    private readonly http: HttpClient
  ) {
  }

  getUser(): Observable<User> {
    const auth_token = localStorage.getItem('user');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    console.log(auth_token)
    return this.http.get<User>(
      `${this.url}/${this.id}`,
      {headers: headers});
  }

  deletePetFromUser() {
    return 'delete'
  }

}
