import { expect, type Locator, type Page } from '@playwright/test';

export class TestCasesPage {
  private readonly lblHeading: Locator;

  constructor(page: Page) {
    this.lblHeading = page.getByRole('heading', {
      name: 'Test Cases',
      exact: true,
    });
  }

  async expectOpened() {
    await expect(this.lblHeading).toBeVisible();
  }
}
