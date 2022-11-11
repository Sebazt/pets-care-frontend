import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-services',
  templateUrl: './about-services.component.html',
  styleUrls: ['./about-services.component.scss']
})
export class AboutServicesComponent implements OnInit {

  cards = [
    {
      title: 'Pet Walker',
      img: 'https://images.unsplash.com/photo-1531617494862-4e322fb560c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
      alt: 'pet walker img',
      description: 'We take your pets for walks, making them as happy as possible. We have adorable walkers who will exercise your pets and spend some time surrounded by other pets, playing and enjoying the outdoors. You set a time, and we pick up your pets at home and take them back.'
    },
    {
      title: 'Pet DayCare',
      img: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
      alt: 'pet daycare img',
      description: 'We pick up your pets at home, we take them to our specialized centers to receive a wonderful treatment. \n' +
        'Our service consists of: Full bath, paticure, pet lotion and a bandana to make your pet look beautiful.'
    },
    {
      title: 'Pet Grooming',
      img: 'https://images.unsplash.com/photo-1525253013412-55c1a69a5738?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      alt: 'pet grooming img',
      description: 'We pick up your pets at home, we take them to our daycare centers, where they can play with other pets, in a controlled environment and supervised by our caregivers. There they will have all the necessary care such as grooming, feeding and affection they deserve.'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
