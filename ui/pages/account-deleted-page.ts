import { expect, type Locator, type Page } from '@playwright/test';

export class AccountDeletedPage {
  private readonly lblHeading: Locator;
  private readonly btnContinue: Locator;

  constructor(page: Page) {
    this.lblHeading = page.getByRole('heading', {
      name: 'Account Deleted!',
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
