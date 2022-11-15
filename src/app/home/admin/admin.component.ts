import { Component, OnInit } from '@angular/core';
import {User} from "../../../assets/utils/interfaces/user.interface";
import {Router} from "@angular/router";
import {ProfileService} from "../../services/profile-service.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  user: User = {
    profile_picture: "",
    name: "",
    phone: "",
    email: "",
    pets: [],
    orders: [],
    comments: [],
  };

  constructor(
    private readonly router: Router,
    private readonly profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.user = this.profileService.getUserTest()
  }

}
