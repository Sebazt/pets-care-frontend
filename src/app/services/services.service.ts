import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CommentInterface} from "../../assets/utils/interfaces/comment.interface";
import {ServiceInterface} from "../../assets/utils/interfaces/service.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  url = 'https://beesoftlabs-team-2-production.up.railway.app/api/services'

  constructor(
    private readonly http: HttpClient
  ) {
  }

  findServices(): Observable<ServiceInterface[]> {
    const auth_token = localStorage.getItem('user');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });

    return this.http.get<ServiceInterface[]>(
      `${this.url}`,
      {headers: headers});
  }
}
