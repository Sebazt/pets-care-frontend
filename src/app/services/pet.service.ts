import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Pet} from "../../assets/utils/interfaces/pet.interface";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  url = 'http://localhost:5001/api/pets'

  constructor(
    private readonly http: HttpClient
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


}
