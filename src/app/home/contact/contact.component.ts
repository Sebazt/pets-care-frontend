import { Component } from '@angular/core';
import {CommentService} from "../../services/comment.service";
import {CommentInterface} from "../../../assets/utils/interfaces/comment.interface";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent{

  constructor(
    private readonly commentService: CommentService
  ) {
  }

  submitForm(form: any) {
    let commentPost: CommentInterface = {
      points: form.star,
      comment: form.comment
    }
    console.log('Comment', commentPost)

    this.commentService.postComment(commentPost)
  }

}
