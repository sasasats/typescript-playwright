import { expect, type Locator, type Page } from '@playwright/test';

import { User } from '../../models/user';

export class SignupForm {
  private readonly form: Locator;
  private readonly lblHeading: Locator;
  private readonly txbName: Locator;
  private readonly txbEmail: Locator;
  private readonly btnSignup: Locator;
  private readonly lblEmailError: Locator;

  constructor(page: Page) {
    this.form = page.locator('.signup-form');
    this.lblHeading = this.form.getByRole('heading', {
      name: 'New User Signup!',
    });
    this.txbName = this.form.getByTestId('signup-name');
    this.txbEmail = this.form.getByTestId('signup-email');
    this.btnSignup = this.form.getByTestId('signup-button');
    this.lblEmailError = this.form.getByText('Email Address already exist!');
  }

  async expectOpened() {
    await expect(this.lblHeading).toBeVisible();
  }

  async expectEmailErrorDisplayed() {
    await expect(this.lblEmailError).toBeVisible();
  }

  async register(account: User['accountInformation']) {
    await this.setInfo(account.name, account.emailAddress);
    await this.clickSignup();
  }

  private async setInfo(name: string, emailAddress: string) {
    await this.txbName.fill(name);
    await this.txbEmail.fill(emailAddress);
  }

  private async clickSignup() {
    await this.btnSignup.click();
  }
}
