import { Component} from '@angular/core';
import { ProfileService } from "../../services/profile-service.service";
import { LoginService } from "../../services/login.service";
import { PetService } from "../../services/pet.service";

@Component({
  selector: 'app-settings',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent  {

  user$ = this.profileService.getUser();

  constructor(
    private readonly profileService: ProfileService,
    private readonly petService: PetService,
    public readonly loginService: LoginService
  ) {
    console.log(this.user$.subscribe({
      next: r => {
        console.log(r)
      }
    }))
  }

  deletePet(value: any) {
    this.petService.deletePetFromUser(value);
    window.location.reload()
  }

  async logout() {
    await this.loginService.logout()
  }
}
