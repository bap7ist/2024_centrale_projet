import { User } from './user.interface';

export interface LoginResponse {
  message: string;
  user: Omit<User, 'password'>;
  token: {
    access_token: string;
  };
}
