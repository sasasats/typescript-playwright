import { expect, type Locator, type Page } from '@playwright/test';

import { User } from '../../models/user';

export class AccountForm {
  private readonly lblHeading: Locator;
  private readonly chkTitle: Locator;
  private readonly lblPassword: Locator;
  private readonly sltDay: Locator;
  private readonly sltMonth: Locator;
  private readonly sltYear: Locator;
  private readonly chkSignUp: Locator;
  private readonly chkReceiveSpecialOffers: Locator;

  constructor(page: Page) {
    this.lblHeading = page.getByRole('heading', {
      name: 'Enter Account Information',
    });
    this.chkTitle = page.locator('div:has-text("Title")');
    this.lblPassword = page.getByTestId('password');
    this.sltDay = page.getByTestId('days');
    this.sltMonth = page.getByTestId('months');
    this.sltYear = page.getByTestId('years');
    this.chkSignUp = page.getByRole('checkbox', {
      name: 'Sign up for our newsletter',
    });
    this.chkReceiveSpecialOffers = page.getByRole('checkbox', {
      name: 'Receive special offers from',
    });
  }

  async expectOpened() {
    await expect(this.lblHeading).toBeVisible();
  }

  async setAccountInformation(account: User['accountInformation']) {
    const { title, password, day, month, year, signUp, receiveSpecialOffers } = account;

    await this.setTitle(title);
    await this.lblPassword.fill(password);
    await this.sltDay.selectOption(day);
    await this.sltMonth.selectOption(month);
    await this.sltYear.selectOption(year);

    if (signUp) {
      await this.chkSignUp.check();
    }

    if (receiveSpecialOffers) {
      await this.chkReceiveSpecialOffers.check();
    }
  }

  private async setTitle(title: string) {
    await this.chkTitle.getByRole('radio', { name: title }).check();
  }
}
