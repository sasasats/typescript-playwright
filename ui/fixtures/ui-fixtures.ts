import { ContactUsPage } from '../pages/contact-us/contact-us-page';
import { SignupLoginPage } from '../pages/signup-login/signup-login-page';
import { SignupPage } from '../pages/signup/signup-page';
import { AccountCreatedPage } from '../pages/account-created-page';
import { AccountDeletedPage } from '../pages/account-deleted-page';
import { HomePage } from '../pages/home-page';
import { Header } from '../components/header';
import { TestCasesPage } from '../pages/test-cases-page';
import { expect, test as base } from '@playwright/test';

type UiFixtures = {
  homePage: HomePage;
  header: Header;
  contactUsPage: ContactUsPage;
  signupPage: SignupPage;
  signupLoginPage: SignupLoginPage;
  accountCreatedPage: AccountCreatedPage;
  accountDeletedPage: AccountDeletedPage;
  testCasesPage: TestCasesPage;
};

export const test = base.extend<UiFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  header: async ({ page }, use) => {
    await use(new Header(page));
  },

  contactUsPage: async ({ page }, use) => {
    await use(new ContactUsPage(page));
  },

  signupPage: async ({ page }, use) => {
    await use(new SignupPage(page));
  },

  signupLoginPage: async ({ page }, use) => {
    await use(new SignupLoginPage(page));
  },

  accountCreatedPage: async ({ page }, use) => {
    await use(new AccountCreatedPage(page));
  },

  accountDeletedPage: async ({ page }, use) => {
    await use(new AccountDeletedPage(page));
  },

  testCasesPage: async ({ page }, use) => {
    await use(new TestCasesPage(page));
  },
});

export { expect };
