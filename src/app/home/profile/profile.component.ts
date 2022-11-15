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
    email: "",
    name: "",
    orders: [],
    pets: [],
    phone: "",
    profile_picture: ""
  };

  constructor(
    private readonly router: Router,
    private readonly profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.user = this.profileService.getUserTest()
  }

  deletePet(value: any) {
    this.profileService.deletePetFromUser()
    alert(`Pet ${value} was deleted`)
  }
}
