import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private router:Router,
    private readonly signup: LoginService
  ) { }

  ngOnInit(): void {
  }

  public async goToHome(): Promise<void> {
    await this.router.navigate(['/']);
  }

  public async goToSignIn():Promise<void>{
    await this.router.navigate(['/signin'])
  }

  async register() {
    await this.signup.login()
  }
}
