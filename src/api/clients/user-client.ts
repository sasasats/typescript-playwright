import { HttpClient } from './http-client';
import { User } from '../models/user';

export type RegistrationResponse = {
  responseCode: number;
  message: string;
};

export class UserClient {
  constructor(private readonly http: HttpClient) {}

  async registerUser(user: User): Promise<RegistrationResponse> {
    return this.http.postForm<RegistrationResponse>('createAccount', { ...user });
  }
}
