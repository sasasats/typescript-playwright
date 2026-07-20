import { expect, type Locator, type Page } from '@playwright/test';

import { User } from '../../models/user';

export class LoginForm {
  private readonly form: Locator;
  private readonly lblHeading: Locator;
  private readonly txbEmail: Locator;
  private readonly txbPassword: Locator;
  private readonly btnLogin: Locator;
  private readonly lblLoginError: Locator;

  constructor(page: Page) {
    this.form = page.locator('.login-form');
    this.lblHeading = this.form.getByRole('heading', {
      name: 'Login to your account',
    });
    this.txbEmail = this.form.getByTestId('login-email');
    this.txbPassword = this.form.getByTestId('login-password');
    this.btnLogin = this.form.getByTestId('login-button');
    this.lblLoginError = this.form.getByText('Your email or password is incorrect!');
  }

  async expectOpened() {
    await expect(this.lblHeading).toBeVisible();
  }

  async expectLoginErrorDisplayed() {
    await expect(this.lblLoginError).toBeVisible();
  }

  async login(account: User['accountInformation']) {
    await this.setInfo(account.emailAddress, account.password);
    await this.clickLogin();
  }

  private async setInfo(emailAddress: string, password: string) {
    await this.txbEmail.fill(emailAddress);
    await this.txbPassword.fill(password);
  }

  private async clickLogin() {
    await this.btnLogin.click();
  }
}
