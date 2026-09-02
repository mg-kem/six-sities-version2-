import { City } from '../commonTypes/commonTypes';

export const cities: City[] = [
  {
    name: 'Paris',
    active: false,
  },
  {
    name: 'Cologne',
    active: false,
  },
  {
    name: 'Brussels',
    active: false,
  },
  {
    name: 'Amsterdam',
    active: true,
  },
  {
    name: 'Hamburg',
    active: false,
  },
  {
    name: 'Dusseldorf',
    active: false,
  },
];

export const AppRoute = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id',
} as const;

export const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN'
} as const;

export const currentAuthStatus = () => AuthorizationStatus.NoAuth;

export type AuthorizationStatusType =
  typeof AuthorizationStatus[keyof typeof AuthorizationStatus];