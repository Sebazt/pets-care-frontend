import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ProfileService} from "./profile-service.service";
import {Pet} from "../../assets/utils/interfaces/pet.interface";
import {Addresses} from "../../assets/utils/interfaces/addresses.interface";

@Injectable({
  providedIn: 'root'
})
export class AddressesService {

  url = 'http://localhost:5001/api/addresses';

  ownerId = '';

  constructor(
    private readonly http: HttpClient,
    private readonly userService: ProfileService
  ) { }

  createAddress(address: Addresses) {
    const body = JSON.stringify(address);
    const auth_token = localStorage.getItem('user');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    return this.http.post<Addresses>(
      `${this.url}`,
      body,
      {headers: headers}).subscribe({
      next: res => {
        if(res){alert('Direccion agregada')}
      }
    });
  }

  deleteAddressFromUser(id: string) {
    const auth_token = localStorage.getItem('user');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    return this.http.delete<Addresses>(
      `${this.url}/${id}`,
      {headers: headers}).subscribe({
      next: res => {
        if(res) {alert('Mascota borrada')}
      }
    });
  }

  foundAddresses() {
    return this.userService.getUser()
  }
}
