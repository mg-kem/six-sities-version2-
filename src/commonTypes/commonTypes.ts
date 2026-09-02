export type City = {
  name: string;
  active: boolean;
};
export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage?: string;
  city?: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  location?: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
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

