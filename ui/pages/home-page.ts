import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
  private readonly uniqElement: Locator;
  private readonly btnTestCases: Locator;

  constructor(page: Page) {
    this.uniqElement = page.getByRole('heading', {
      name: 'Exercise',
    });
    this.btnTestCases = page.getByRole('button', {
      name: 'Test Cases',
    });
  }

  async expectOpened() {
    await expect(this.uniqElement).toBeVisible();
  }

  async clickTestCases() {
    await this.btnTestCases.click();
  }
}
