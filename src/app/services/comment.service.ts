import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CommentInterface} from "../../assets/utils/interfaces/comment.interface";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  comment: CommentInterface = {
    id: "",
    author: "",
    comment: "",
    points: 0,
    created_at: new Date(),
    last_updated_at: new Date(),
  }

  url = '';

  constructor(
    private readonly http: HttpClient
  ) {
  }

  async getComments() {
    return this.http.get(this.url)
      .subscribe({
        next: res => res,
        error: e => alert(e)
      });
  }

  getUserTest() {
    return this.comment;
  }

  deletePetFromUser() {
    return 'delete'
  }
}
