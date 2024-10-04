import { Restaurant } from './restaurant.interface';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  profilePicture: string | null;
  favoriteRestaurants: Restaurant[];
}

export interface userRequest {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  profilePicture: string | null;
  favoriteRestaurants: number[];
}
