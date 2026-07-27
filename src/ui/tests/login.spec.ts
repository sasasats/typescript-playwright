import { test } from '../fixtures/navigation-fixtures';
import { createIncorrectUser } from '../fixtures/user-fixtures';

test.describe('Authentication', () => {
  test.beforeEach(async ({ navigateToSignupLoginPage }) => {
    await navigateToSignupLoginPage();
  });

  test('Login User with correct email and password', async ({
    registeredUser,
    signupLoginPage,
    header,
    accountDeletedPage,
  }) => {
    await signupLoginPage.loginForm.login(registeredUser.accountInformation);
    await header.expectUserLoggedIn(registeredUser.accountInformation.name);

    await header.clickDeleteAccount();
    await accountDeletedPage.expectOpened();
  });

  test('Login User with incorrect email and password', async ({ signupLoginPage }) => {
    const incorrectUser = createIncorrectUser();

    await signupLoginPage.loginForm.login(incorrectUser.accountInformation);
    await signupLoginPage.loginForm.expectLoginErrorDisplayed();
  });

  test('Logout User', async ({ registeredUser, signupLoginPage, header }) => {
    await signupLoginPage.loginForm.login(registeredUser.accountInformation);
    await header.expectUserLoggedIn(registeredUser.accountInformation.name);

    await header.clickLogout();
    await signupLoginPage.loginForm.expectOpened();
  });
});
