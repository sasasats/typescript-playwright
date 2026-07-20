import { User } from '../models/user';
import { UserFactory } from '../factories/user-factory';

export function createUser(): User {
  return UserFactory.create();
}

export function createIncorrectUser(): User {
  return {
    accountInformation: {
      emailAddress: 'wrong@test.com',
      password: 'wrong',
    },
  } as User;
}
