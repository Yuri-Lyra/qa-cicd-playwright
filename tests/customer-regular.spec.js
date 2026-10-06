import { test, expect } from '@playwright/test';

test('Customer regular - login', async ({ page }) => {

  await page.goto('https://develop.persimmon.life/');

  await page.getByRole('link', { name: 'Login' }).click();

  await expect(page).toHaveURL(
    'https://develop.persimmon.life/login'
  );

  await expect(
    page.getByText('Login or sign up to continue')
  ).toBeVisible();

  await page
    .locator('[data-test="phone-input"]')
    .fill('(213) 551-0030');

  await page
    .locator('[data-test="terms-checkbox"]')
    .check();

  await page
    .locator('[data-test="next-button"]')
    .click();

  const code = '123456';

  for (let i = 0; i < code.length; i++) {
    await page.locator(`#field-${i}`).press(code[i]);
  }

  await page
    .locator('[data-test="code-next-button"]')
    .click();
});