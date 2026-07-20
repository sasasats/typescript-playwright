import { test as base } from '@playwright/test';
import { env } from '../../config/env';
import { HttpClient } from '../clients/http-client';
import { UserClient } from '../clients/user-client';
import { User } from '../../ui/models/user';
import { UserFactory } from '../../ui/factories/user-factory';
import { UserMapper } from '../mappers/user-mapper';

export type ApiClients = {
  userClient: UserClient;
};

type ApiFixtures = {
  api: ApiClients;
  registeredUser: User;
};

export const test = base.extend<ApiFixtures>({
  api: async ({ playwright }, use) => {
    const request = await playwright.request.newContext({
      baseURL: env.API_URL,
    });

    const http = new HttpClient(request);

    const clients: ApiClients = {
      userClient: new UserClient(http),
    };

    await use(clients);

    await request.dispose();
  },

  registeredUser: async ({ api }, use) => {
    const user = UserFactory.create();

    await api.userClient.registerUser(UserMapper.toApiUser(user));

    await use(user);
  },
});
