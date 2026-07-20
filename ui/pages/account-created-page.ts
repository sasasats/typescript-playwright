import { expect, type Locator, type Page } from '@playwright/test';

export class AccountCreatedPage {
  private readonly lblHeading: Locator;
  private readonly btnContinue: Locator;

  constructor(page: Page) {
    this.lblHeading = page.getByRole('heading', {
      name: 'Account Created!',
    });
    this.btnContinue = page.getByTestId('continue-button');
  }

  async expectOpened() {
    await expect(this.lblHeading).toBeVisible();
  }

  async clickContinue() {
    await this.btnContinue.click();
  }
}
