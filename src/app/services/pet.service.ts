import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Pet} from "../../assets/utils/interfaces/pet.interface";
import {ProfileService} from "./profile-service.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  url = 'https://beesoftlabs-team-2-production.up.railway.app/api/pets';

  ownerId = '';

  constructor(
    private readonly http: HttpClient,
    private readonly userService: ProfileService
  ) { }


  deletePetFromUser(id: string) {
    const auth_token = localStorage.getItem('user');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    return this.http.delete<Pet>(
      `${this.url}/${id}`,
      {headers: headers}).subscribe({
      next: res => {
        if(res) {alert('Mascota borrada')}
      }
    });
  }

  createPet(petInfo: Pet) {
    const body = JSON.stringify(petInfo);
    const auth_token = localStorage.getItem('user');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    return this.http.post<Pet>(
      `${this.url}`,
      body,
      {headers: headers}).subscribe({
      next: res => {
        if(res){alert('Mascota creada')}
      }
    });
  }

  foundPets() {
    return this.userService.getUser()
  }


}
