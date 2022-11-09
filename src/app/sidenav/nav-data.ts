import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
  {
    routeLink: 'servicies',
    icon: 'fa fa-home',
    label: 'Servicies',
    items: [
      {
        routeLink: 'servicies/',
        label: 'paseos',
      },

      {
        routeLink: 'servicies/',
        label: 'guarderia',
      },

      {
        routeLink: 'servicies/',
        label: 'peluqueria',
      },
    ],
  },

  {
    routeLink: 'signup',
    icon: 'fa fa-box-open',
    label: 'Sign up',
  },

  {
    routeLink: 'signin',
    icon: 'fa fa-chart-bar',
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
    icon: 'fa-solid fa-shop-lock',
    label: 'Settings',
  },
];
