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
    addresses: [],
    comments: [],
    created_at: "",
    email: "",
    id: "",
    name: "",
    orders: [],
    pets: [],
    phone: "",
    profile_picture: "",
    roles: ""
  };

  constructor(
    private readonly router: Router,
    private readonly profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.profileService.getUser().subscribe({
      next: (user) => {
        console.log('User:',user);
        this.user = user;
      }
    })
  }

}
