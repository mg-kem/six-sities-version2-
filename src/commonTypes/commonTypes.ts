export type CityOffer = {
  name: string;
  location: Location;
}

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};


export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage?: string;
  city: CityOffer;
  location: Location;
  isFavorite?: boolean;
  isPremium?: boolean;
  rating?: number;
};

type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type Review = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: User;
}

