import { test } from '../fixtures/navigation-fixtures';
import { UserFactory } from '../factories/user-factory';

test.describe('Registration', () => {
  test.beforeEach(async ({ navigateToSignupLoginPage }) => {
    await navigateToSignupLoginPage();
  });

  test('Register user', async ({ signupLoginPage, signupPage, accountCreatedPage, header, accountDeletedPage }) => {
    const user = UserFactory.create();

    await signupLoginPage.signupForm.register(user.accountInformation);
    await signupPage.expectOpened();

    await signupPage.register(user);
    await accountCreatedPage.expectOpened();

    await accountCreatedPage.clickContinue();
    await header.expectUserLoggedIn(user.accountInformation.name);

    await header.clickDeleteAccount();
    await accountDeletedPage.expectOpened();
    await accountDeletedPage.clickContinue();
  });

  test('Register User with existing email', async ({ registeredUser, signupLoginPage }) => {
    await signupLoginPage.signupForm.register(registeredUser.accountInformation);
    await signupLoginPage.signupForm.expectEmailErrorDisplayed();
  });
});
