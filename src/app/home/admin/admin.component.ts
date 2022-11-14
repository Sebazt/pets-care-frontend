import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  user = {
    profile_picture: 'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top',
    name: 'User',
    email: 'some@gmail.com',
    phone: '312332322',
  }

  orders = [
    {
      id: '41241241',
      date: '21/03/2000',
      starts_at: '12:00 pm',
      finish_at: '1:00 pm',
      price: 15.000,
      services: [
        'Pet Walker',
        'Pet DayCare',
        'Pet Grooming'
      ]
    },
    {
      id: '4124124',
      date: '21/03/2000',
      starts_at: '12:00 pm',
      finish_at: '1:00 pm',
      price: 15.000,
      services: [
        'Pet Walker',
        'Pet DayCare',
        'Pet Grooming'
      ]
    },
    {
      id: '4124124',
      date: '21/03/2000',
      starts_at: '12:00 pm',
      finish_at: '1:00 pm',
      price: 15.000,
      services: [
        'Pet Walker',
        'Pet DayCare',
        'Pet Grooming'
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
