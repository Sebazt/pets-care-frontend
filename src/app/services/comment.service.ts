import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CommentInterface} from "../../assets/utils/interfaces/comment.interface";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  url = 'http://localhost:5001/api/comments';

  auth_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkNDMyNmM0LTNjODItNDhkNi1hYzM3LTc4NmU0NmQxYTBhZCIsImlhdCI6MTY2ODYxOTEzOCwiZXhwIjoxNjY4NjE5NzM4fQ.uIjmcWzg68TTfXw8cOTlycIZ3m90oGjF9nVV8aDZQZE '

  comment: CommentInterface = {
    comment: "",
    points: 0
  }

  constructor(
    private readonly http: HttpClient
  ) {
  }

  postComment(comment: CommentInterface) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    });

    const body = JSON.stringify(comment);

    this.http.post(
      `${this.url}`,
      body,
      {headers: headers}).subscribe();
  }

}
