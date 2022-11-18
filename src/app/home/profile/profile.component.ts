import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../../../assets/utils/interfaces/user.interface";
import {ProfileService} from "../../services/profile-service.service";
import {LoginService} from "../../services/login.service";
import {PetService} from "../../services/pet.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-settings',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

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

  usersSubscription: Subscription | undefined;

  constructor(
    private readonly profileService: ProfileService,
    private readonly petService: PetService,
    public readonly loginService: LoginService
  ) { }

  ngOnInit(): void {
    const getUser = this.profileService.getUser().subscribe({
      next: (user) => {
        console.log('User:',user);
        this.user = user;
      }
    })
    this.usersSubscription?.add(getUser)
  }

  ngOnDestroy(): void {
    this.usersSubscription?.unsubscribe()
  }

  deletePet(value: any) {
    this.petService.deletePetFromUser(value);
    window.location.reload()
  }

  async logout() {
    await this.loginService.logout()
  }
}
