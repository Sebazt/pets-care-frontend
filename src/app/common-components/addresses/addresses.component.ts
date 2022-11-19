import { Component, OnInit } from '@angular/core';
import {PetService} from "../../services/pet.service";
import {Router} from "@angular/router";
import {AddressesService} from "../../services/addresses.service";
import {Addresses} from "../../../assets/utils/interfaces/addresses.interface";

@Component({
  selector: 'addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {

  constructor(
    private readonly addressService: AddressesService,
    private readonly  router: Router
  ) { }

  ngOnInit(): void {
  }

  async createAddress(value: any) {
    const address: Addresses = {
      address: value.direccion,
      city: value.departamento,
      state: value.municipio,
      remark: value.remark
    }

    this.addressService.createAddress(address)

    await this.router.navigate(['/profile'])
  }

}
