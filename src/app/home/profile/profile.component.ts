import { Component, OnInit } from '@angular/core';
import {Route, Router} from "@angular/router";
import {User} from "../../../assets/utils/interfaces/user.interface";
import {ProfileService} from "../../services/profile-service.service";

@Component({
  selector: 'app-settings',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

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

  deletePet(value: any) {
    this.profileService.deletePetFromUser()
    alert(`Pet ${value} was deleted`)
  }
}
