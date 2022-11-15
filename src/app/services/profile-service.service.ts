import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../assets/utils/interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  url = 'localhost:5001';

  user: User = {
    profile_picture: 'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top',
    name: 'User',
    email: 'some@gmail.com',
    phone: '312332322',
    pets: [
      {
        pet_photo: '',
        id: '',
        name: 'Michi',
        age: 6,
        size: 25.6,
      },
      {
        pet_photo: '',
        id: '',
        name: 'Michi',
        age: 6,
        size: 25.6,
      },
      {
        pet_photo: '',
        id: '',
        name: 'Michi',
        age: 6,
        size: 25.6,
      }
    ],
    orders: [
      {
        id: '41241241',
        date: new Date(),
        starts_at: new Date(),
        finish_at: new Date(),
        price: 15000,
        services: [
          'Pet Walker',
          'Pet DayCare',
          'Pet Grooming'
        ]
      },
      {
        id: '4124124',
        date: new Date(),
        starts_at: new Date(),
        finish_at: new Date(),
        price: 15000,
        services: [
          'Pet Walker',
          'Pet DayCare',
          'Pet Grooming'
        ]
      },
      {
        id: '4124124',
        date: new Date(),
        starts_at: new Date(),
        finish_at: new Date(),
        price: 15000,
        services: [
          'Pet Walker',
          'Pet DayCare',
          'Pet Grooming'
        ]
      }
    ]
  }

  constructor(
    private readonly http: HttpClient
  ) {
  }

  async getUser() {
    return this.http.get(this.url)
      .subscribe({
        next: res => res,
        error: e => alert(e)
      });
  }

  getUserTest() {
    return this.user;
  }

  deletePetFromUser() {
    return 'delete'
  }

}
