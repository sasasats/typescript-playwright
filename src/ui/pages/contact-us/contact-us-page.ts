import { expect, type Locator, type Page } from '@playwright/test';
import { GetInTouchForm } from './get-in-touch-form';

export class ContactUsPage {
  private readonly lblHeading: Locator;

  constructor(private readonly page: Page) {
    this.lblHeading = page.locator('#contact-page');
  }

  get getInTouchForm() {
    return new GetInTouchForm(this.page);
  }

  async expectOpened() {
    await expect(this.lblHeading).toBeVisible();
  }
}
