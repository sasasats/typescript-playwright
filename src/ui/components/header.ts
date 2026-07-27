import { expect, type Locator, type Page } from '@playwright/test';

export class Header {
  private readonly form: Locator;
  private readonly lnkSignupLogin: Locator;
  private readonly lnkLogout: Locator;
  private readonly lnkDeleteAccount: Locator;
  private readonly lnkContactUs: Locator;
  private readonly lnkLoggedInAs: Locator;

  constructor(public readonly page: Page) {
    this.form = page.locator('#header');
    this.lnkSignupLogin = this.form.getByRole('link', {
      name: 'Signup / Login',
    });
    this.lnkLogout = this.form.getByRole('link', { name: 'Logout' });
    this.lnkDeleteAccount = this.form.getByRole('link', {
      name: 'Delete Account',
    });
    this.lnkContactUs = this.form.getByRole('link', { name: 'Contact us' });
    this.lnkLoggedInAs = this.form.locator('li', {
      hasText: 'Logged in as',
    });
  }

  async expectUserLoggedIn(username: string) {
    await expect(this.lnkLoggedInAs).toContainText(username);
  }

  async clickSignupLogin() {
    await this.lnkSignupLogin.click();
  }

  async clickLogout() {
    await this.lnkLogout.click();
  }

  async clickDeleteAccount() {
    await this.lnkDeleteAccount.click();
  }

  async clickContactUs() {
    await this.lnkContactUs.click();
  }
}
