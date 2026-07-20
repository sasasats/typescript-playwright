import { expect, type Locator, type Page } from '@playwright/test';

import { User } from '../../models/user';

export class GetInTouchForm {
  private readonly form: Locator;
  private readonly lblHeading: Locator;
  private readonly txbName: Locator;
  private readonly txbEmail: Locator;
  private readonly txbSubject: Locator;
  private readonly txbMessage: Locator;
  private readonly inpChooseFile: Locator;
  private readonly btnSubmit: Locator;
  private readonly lblSuccess: Locator;
  private readonly btnHome: Locator;

  constructor(private readonly page: Page) {
    this.form = this.page.locator('.contact-form');
    this.lblHeading = this.form.getByRole('heading', {
      name: 'Get In Touch',
    });
    this.txbName = this.form.getByTestId('name');
    this.txbEmail = this.form.getByTestId('email');
    this.txbSubject = this.form.getByTestId('subject');
    this.txbMessage = this.form.getByTestId('message');
    this.inpChooseFile = this.form.locator('input[name="upload_file"]');
    this.btnSubmit = this.form.getByTestId('submit-button');
    this.lblSuccess = this.form.getByText('Success! Your details have been submitted successfully.');
    this.btnHome = this.form.getByRole('link', { name: 'Home' });
  }

  async expectOpened() {
    await expect(this.lblHeading).toBeVisible();
  }

  async expectSuccess() {
    await expect(this.lblSuccess).toBeVisible();
  }

  async sendGetInTouchForm(account: User['accountInformation'], subject: string, message: string, file: string) {
    await this.fillGetInTouchForm(account, subject, message, file);
    await this.clickSubmit();
  }

  async clickHome() {
    await this.btnHome.click();
  }

  private async fillGetInTouchForm(
    account: User['accountInformation'],
    subject: string,
    message: string,
    file: string,
  ) {
    await this.txbName.fill(account.name);
    await this.txbEmail.fill(account.emailAddress);
    await this.txbSubject.fill(subject);
    await this.txbMessage.fill(message);
    await this.inpChooseFile.setInputFiles(file);
  }

  private async clickSubmit() {
    await this.page.waitForLoadState('domcontentloaded');
    this.page.once('dialog', (dialog) => dialog.accept());
    await this.btnSubmit.click();
  }
}
