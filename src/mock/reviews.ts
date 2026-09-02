import type {Review} from '../commonTypes/commonTypes';

export const reviews: Review[] = [
  {
    'id': '7a2375dd-f84a-493f-84b0-a648689c4d35',
    'comment': 'I stayed here for one night and it was an unpleasant experience.',
    'date': '2026-08-12T21:00:00.125Z',
    'rating': 3,
    'user': {
      'name': 'Corey',
      'avatarUrl': 'https://15.design.htmlacademy.pro/static/avatar/5.jpg',
      'isPro': false
    }
  },
  {
    'id': 'f422fea6-c98a-4de6-a66a-09bce56f5e84',
    'comment': 'What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!',
    'date': '2026-08-12T21:00:00.125Z',
    'rating': 3,
    'user': {
      'name': 'Zak',
      'avatarUrl': 'https://15.design.htmlacademy.pro/static/avatar/6.jpg',
      'isPro': true
    }
  },
  {
    'id': '7075f808-8047-49a0-8b3e-3db4719f9c05',
    'comment': 'This villa is perfect in every way: the view on mountains and waterfalls, the hot tub and the villa itself. The evening here became a great continuation of our journeys over country.',
    'date': '2026-08-09T21:00:00.125Z',
    'rating': 5,
    'user': {
      'name': 'Mollie',
      'avatarUrl': 'https://15.design.htmlacademy.pro/static/avatar/4.jpg',
      'isPro': false
    }
  }
];
