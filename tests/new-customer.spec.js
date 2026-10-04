import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('New Customer', async ({ page }) => {

  // Gera número e email únicos
  const suffix = faker.number.int({ min: 1000, max: 9999 });
  const phoneNumber = `(213) 551-${suffix}`;
  const email = `dev213551${suffix}@tuamaeaquelaursa.com`;

  await page.goto('https://develop.persimmon.life/');
  await page.getByRole('link', { name: 'Login' }).click();

  await expect(page).toHaveURL(
    'https://develop.persimmon.life/login'
  );

  await expect(
    page.getByText('Login or sign up to continue')
  ).toBeVisible();

  await page.locator('[data-test="phone-input"]').fill(phoneNumber);
  await page.locator('[data-test="terms-checkbox"]').check();
  await page.locator('[data-test="next-button"]').click();

  const code = '123456';

  for (let i = 0; i < code.length; i++) {
    await page.locator(`#field-${i}`).press(code[i]);
  }

  await page.locator('[data-test="code-next-button"]').click();

  await page.locator('[data-test="email-input"]').fill(email);
  await page.locator('[data-test="next-button"]').click();

  await page.getByRole('img', { name: 'Tox' }).click();
  await page.locator('[data-test="checkbox-tox"]').check();
  await page.locator('[data-test="button-submit"]').click();

  await page.locator('[data-test="home-link"]').click();
});