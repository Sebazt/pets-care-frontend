import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
  {
    routeLink: 'servicies',
    icon: 'fa fa-paw',
    label: 'Servicies',
    /* expanded: true,  aquí lo paso t,  y no hay necesidad de expandirlo*/
    items: [
      {
        routeLink: 'servicies/petwalker',
        label: 'Pet Walker',
      },

      {
        routeLink: 'servicies/petdaycare',
        label: 'Pet DayCare',
      },

      {
        routeLink: 'servicies/petgrooming',
        label: 'Pet Grooming',
      },
    ],
  },

  {
    routeLink: 'signup',
    icon: 'fa-solid fa-pencil',
    label: 'Sign up',
  },

  {
    routeLink: 'signin',
    icon: 'fa-solid fa-user',
    label: 'Sign in',
  },

  {
    routeLink: 'aboutus',
    icon: 'fa fa-tags',
    label: 'About us',
  },

  {
    routeLink: 'admin',
    icon: 'fa-solid fa-shop-lock',
    label: 'Admin',
  },

  {
    routeLink: 'settings',
    icon: 'fa-solid fa-gear',
    label: 'Settings',
  },
];
