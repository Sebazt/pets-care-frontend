import { Component, OnInit } from '@angular/core';
import {PetService} from "../../services/pet.service";

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.scss']
})
export class AddPetComponent implements OnInit {

  constructor(
    private readonly petService: PetService,
  ) { }

  ngOnInit(): void {
  }

  createPet(value: any) {
    const {petName, petEspecie, petSize, petWeight, petAge} = value;

    this.petService.createPet({
      name: petName,
      age: petAge,
      species: petEspecie,
      size: petSize,
      weight: petWeight
    })
  }

}
