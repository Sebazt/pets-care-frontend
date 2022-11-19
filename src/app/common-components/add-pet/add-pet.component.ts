import { Component, OnInit } from '@angular/core';
import {PetService} from "../../services/pet.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.scss']
})
export class AddPetComponent implements OnInit {

  constructor(
    private readonly petService: PetService,
    private readonly  router: Router
  ) { }

  ngOnInit(): void {
  }

  async createPet(value: any) {
    const {petName, petEspecie, petSize, petWeight, petAge} = value;

    this.petService.createPet({
      name: petName,
      age: petAge,
      species: petEspecie,
      size: petSize,
      weight: petWeight
    })

    await this.router.navigate(['/profile'])
  }

}
