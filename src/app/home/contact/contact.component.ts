import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent{

  commentForm = {
    email: '',
    comment: ''
  }

  submitForm(form: any) {
    this.commentForm.email = form.email;
    this.commentForm.comment = form.comment;
    console.log(this.commentForm)
  }

}
