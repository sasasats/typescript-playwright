import { type Locator, type Page } from '@playwright/test';

import { User } from '../../models/user';

export class AddressForm {
  readonly txbFirstName: Locator;
  readonly txbLastName: Locator;
  readonly txbCompany: Locator;
  readonly txbAddress: Locator;
  readonly txbAddress2: Locator;
  readonly sltCountry: Locator;
  readonly txbState: Locator;
  readonly txbCity: Locator;
  readonly txbZipCode: Locator;
  readonly txbMobileNumber: Locator;

  constructor(page: Page) {
    this.txbFirstName = page.getByTestId('first_name');
    this.txbLastName = page.getByTestId('last_name');
    this.txbCompany = page.getByTestId('company');
    this.txbAddress = page.getByTestId('address');
    this.txbAddress2 = page.getByTestId('address2');
    this.sltCountry = page.getByTestId('country');
    this.txbState = page.getByTestId('state');
    this.txbCity = page.getByTestId('city');
    this.txbZipCode = page.getByTestId('zipcode');
    this.txbMobileNumber = page.getByTestId('mobile_number');
  }

  async setAddressInformation(addressInformation: User['addressInformation']) {
    const { firstName, lastName, company, address, address2, country, state, city, zipCode, mobileNumber } =
      addressInformation;

    await this.txbFirstName.fill(firstName);
    await this.txbLastName.fill(lastName);
    await this.txbCompany.fill(company);
    await this.txbAddress.fill(address);
    await this.txbAddress2.fill(address2);
    await this.sltCountry.selectOption(country);
    await this.txbState.fill(state);
    await this.txbCity.fill(city);
    await this.txbZipCode.fill(zipCode);
    await this.txbMobileNumber.fill(mobileNumber);
  }
}
