import { expect, test as uiFixtures } from './ui-fixtures';
import { SignupLoginPage } from '../pages/signup-login/signup-login-page';
import { HomePage } from '../pages/home-page';
import { mergeTests } from '@playwright/test';
import { test as apiFixtures } from '../../api/fixtures/fixtures';

type NavigationFixtures = {
  navigateToHomePage: () => Promise<HomePage>;
  navigateToSignupLoginPage: () => Promise<SignupLoginPage>;
};

const baseTest = mergeTests(uiFixtures, apiFixtures);

export const test = baseTest.extend<NavigationFixtures>({
  navigateToHomePage: async ({ page, homePage }, use) => {
    await use(async () => {
      await page.goto('/');
      await homePage.expectOpened();

      return homePage;
    });
  },

  navigateToSignupLoginPage: async ({ navigateToHomePage, header, signupLoginPage }, use) => {
    await use(async () => {
      await navigateToHomePage();
      await header.clickSignupLogin();

      await signupLoginPage.loginForm.expectOpened();
      await signupLoginPage.signupForm.expectOpened();

      return signupLoginPage;
    });
  },
});

export { expect };
