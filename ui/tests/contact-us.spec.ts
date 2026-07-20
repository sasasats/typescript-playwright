import { faker } from '@faker-js/faker';
import { test } from '../fixtures/navigation-fixtures';
import { Images } from '../../resources/images/images';
import { createUser } from '../fixtures/user-fixtures';

test.describe('Contact Us', () => {
  test('Contact Us Form', async ({ navigateToHomePage, header, contactUsPage }) => {
    const homePage = await navigateToHomePage();

    header.clickContactUs();
    await contactUsPage.expectOpened();

    await contactUsPage.getInTouchForm.sendGetInTouchForm(
      createUser().accountInformation,
      faker.lorem.words(4),
      faker.lorem.paragraphs(2),
      Images.chmonya,
    );
    await contactUsPage.getInTouchForm.expectSuccess();

    await contactUsPage.getInTouchForm.clickHome();
    await homePage.expectOpened();
  });
});
