import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(
    private router : Router,
    public readonly loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  public async goToHome(): Promise<void> {
    await this.router.navigate(['/']);
  }

  public async goToSignUp():Promise<void>{
    await this.router.navigate(['/signup'])
  }

  async ingresar(proveedor: string) {
    console.log(proveedor)
    await this.loginService.login(proveedor)
  }

}
