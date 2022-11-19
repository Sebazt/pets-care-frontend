import { Component, OnInit } from '@angular/core';
import {PetService} from "../../services/pet.service";
import {Pet} from "../../../assets/utils/interfaces/pet.interface";
import {ServiceInterface} from "../../../assets/utils/interfaces/service.interface";
import {ServicesService} from "../../services/services.service";
import {OrdersService} from "../../services/orders.service";

@Component({
  selector: 'app-buy-service',
  templateUrl: './buy-service.component.html',
  styleUrls: ['./buy-service.component.scss']
})
export class BuyServiceComponent implements OnInit {

  pets: Pet[] = []

  services: ServiceInterface[] = []

  constructor(
    private readonly servicesService: ServicesService,
    private readonly petService: PetService,
    private readonly orderService: OrdersService
  ) { }

  ngOnInit(): void {
    this.petService.foundPets().subscribe({
      next: res => {
        this.pets = res.pets;
      }
    })

    this.servicesService.findServices().subscribe({
      next: res => {
        this.services = res;
      }
    })
  }

  crearOrder(value: any) {
    const {pet, service, time} = value;

    const elemento = this.services.filter(s => s.id === service)

    this.orderService.createOrder({
      services_id: [service],
      total_price: elemento[0].price
    })
  }
}
