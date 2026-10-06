import { test, expect } from '@playwright/test';

test('Customer regular - login', async ({ page }) => {

  await page.goto('https://develop.persimmon.life/');

  await page.getByRole('link', { name: 'Login' }).click();

  await expect(page).toHaveURL(
    'https://develop.persimmon.life/login'
  );

await expect(
  page.getByText('Login or sign up to continue')
).toBeVisible({ timeout: 10000 });

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

await page.locator('#field-0').click();

for (const digit of code) {
  await page.keyboard.press(digit);
}

  await page
    .locator('[data-test="code-next-button"]')
    .click();
});