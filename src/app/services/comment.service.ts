import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CommentInterface} from "../../assets/utils/interfaces/comment.interface";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  url = 'https://beesoftlabs-team-2-production.up.railway.app/api/comments';

  comment: CommentInterface = {
    comment: "",
    points: 0
  }

  constructor(
    private readonly http: HttpClient
  ) {
  }

  postComment(comment: CommentInterface) {
    const auth_token = localStorage.getItem('user');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });

    const body = JSON.stringify(comment);

    this.http.post<CommentInterface>(
      `${this.url}`,
      body,
      {headers: headers}).subscribe();
  }

}
