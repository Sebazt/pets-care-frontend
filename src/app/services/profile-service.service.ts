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

  auth_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkNDMyNmM0LTNjODItNDhkNi1hYzM3LTc4NmU0NmQxYTBhZCIsImlhdCI6MTY2ODYxOTEzOCwiZXhwIjoxNjY4NjE5NzM4fQ.uIjmcWzg68TTfXw8cOTlycIZ3m90oGjF9nVV8aDZQZE '

  constructor(
    private readonly http: HttpClient
  ) {
  }

  getUser(): Observable<User> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    });
    return this.http.get<User>(
      `${this.url}/${this.id}`,
      {headers: headers});
  }

  deletePetFromUser() {
    return 'delete'
  }

}
