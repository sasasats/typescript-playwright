import { type Page } from '@playwright/test';
import { SignupForm } from './signup-form';
import { LoginForm } from './login-form';

export class SignupLoginPage {
  constructor(private readonly page: Page) {}

  get loginForm() {
    return new LoginForm(this.page);
  }

  get signupForm() {
    return new SignupForm(this.page);
  }
}
