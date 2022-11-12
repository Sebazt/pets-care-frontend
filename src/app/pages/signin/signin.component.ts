import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  public async goToHome(): Promise<void> {
    await this.router.navigate(['/']);
  }

  public async goToSignUp():Promise<void>{
    await this.router.navigate(['/signup'])
  }

}
