import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [

  {
    routeLink: '',
    icon: 'fa-solid fa-house',
    label: 'Home',
  },

  {
    routeLink: 'home',
    icon: 'fa fa-paw',
    label: 'Servicies',
    items: [
      {
        routeLink: '/home/petwalker',
        label: 'Pet Walker',
      },

      {
        routeLink: '/home/petdaycare',
        label: 'Pet DayCare',
      },

      {
        routeLink: '/home/petgrooming',
        label: 'Pet Grooming',
      },
    ],
  },

  {
    routeLink: '/aboutServices',
    icon: 'fa-solid fa-dog',
    label: 'Our Services',
  },

  {
    routeLink: '/aboutus',
    icon: 'fa fa-tags',
    label: 'About us',
  },

  {
    routeLink: 'contact',
    icon: 'fa-solid fa-headset',
    label: 'Contact',
  },

  {
    routeLink: '/signin',
    icon: 'fa-solid fa-user',
    label: 'Sign in',
  },

  {
    routeLink: '/admin',
    icon: 'fa-solid fa-shop-lock',
    label: 'Admin',
  },

  {
    routeLink: '/profile',
    icon: 'fa-solid fa-user',
    label: 'Profile',
  },
];
