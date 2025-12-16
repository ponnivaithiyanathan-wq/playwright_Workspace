import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLoginPage();
  await loginPage.fillUsername('ponnivaithiyanathan-pzzm@force.com');
  await loginPage.fillPassword('21March@1982');
  const homePage = await loginPage.login();
  // Add assertions to verify successful login, e.g., check for a specific element on the home page
  if (homePage) {
      await expect(homePage).toHaveURL(/.*home.*/);
  }

});

