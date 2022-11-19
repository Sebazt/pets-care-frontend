import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ProfileService} from "./profile-service.service";
import {Pet} from "../../assets/utils/interfaces/pet.interface";
import {Order} from "../../assets/utils/interfaces/order.interface";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  url = 'https://beesoftlabs-team-2-production.up.railway.app/api/orders';

  ownerId = '';

  constructor(
    private readonly http: HttpClient,
    private readonly userService: ProfileService
  ) { }


  createOrder(order: Order) {
    const auth_token = localStorage.getItem('user');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    console.log('body', order)

    const body = JSON.stringify(order);

    return this.http.post<Order>(
      `${this.url}`,
      body,
      {headers: headers}).subscribe({
      next: res => {
        if(res) {alert('Servicio pedido, gracias!')}
      }
    });
  }
}
