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
    /* expanded: true,  aquí lo paso t,  y no hay necesidad de expandirlo*/
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
    routeLink: '/signup',
    icon: 'fa-solid fa-pencil',
    label: 'Sign up',
  },

  {
    routeLink: '/signin',
    icon: 'fa-solid fa-user',
    label: 'Sign in',
  },

  {
    routeLink: '/home/aboutus',
    icon: 'fa fa-tags',
    label: 'About us',
  },

  {
    routeLink: '/admin',
    icon: 'fa-solid fa-shop-lock',
    label: 'Admin',
  },

  {
    routeLink: '/settings',
    icon: 'fa-solid fa-gear',
    label: 'Settings',
  },
];
