export const cities: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
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
