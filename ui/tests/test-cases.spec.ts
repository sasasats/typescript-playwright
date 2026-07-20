import { test } from '../fixtures/navigation-fixtures';

test.describe('Test Cases', () => {
  test('Verify Test Cases Page', async ({ navigateToHomePage, testCasesPage }) => {
    const homePage = await navigateToHomePage();

    await homePage.clickTestCases();
    await testCasesPage.expectOpened();
  });
});
