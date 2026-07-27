import { type Locator, type Page } from '@playwright/test';
import { User } from '../../models/user';
import { AccountForm } from './account-form';
import { AddressForm } from './address-form';

export class SignupPage {
  private readonly btnCreateAccount: Locator;

  constructor(private readonly page: Page) {
    this.btnCreateAccount = page.getByTestId('create-account');
  }

  get accountForm() {
    return new AccountForm(this.page);
  }

  get addressForm() {
    return new AddressForm(this.page);
  }

  async expectOpened() {
    await this.accountForm.expectOpened();
  }

  async register(user: User) {
    await this.accountForm.setAccountInformation(user.accountInformation);
    await this.addressForm.setAddressInformation(user.addressInformation);
    await this.clickCreateAccount();
  }

  private async clickCreateAccount() {
    await this.btnCreateAccount.click();
  }
}
