import { Offer } from '../commonTypes/commonTypes';

export const mockOffers: Offer[] = [
  {
    'id': '3c1ec66a-dd4e-4e5f-9684-c80b0d81a2ad',
    'title': 'Perfectly located Castro',
    'type': 'apartment',
    'price': 458,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.868610000000004,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.4
  },
  {
    'id': '007dbcad-6c63-400e-b06a-0ce7c713e6b3',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'room',
    'price': 119,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.858610000000006,
      'longitude': 2.330499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1
  },
];
