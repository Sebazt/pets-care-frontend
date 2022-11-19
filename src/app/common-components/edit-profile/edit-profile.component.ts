import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../../services/profile-service.service";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  constructor(
    private readonly profileService: ProfileService
  )
   { }

  ngOnInit(): void {
  }

  editProfile(value: any) {
    const newInfo = {
      name: value.name,
      phone: value.phone
    }

    this.profileService.editProfile(newInfo);

  }

}
