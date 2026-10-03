import { test, expect } from '@playwright/test';

test('Login - acesso à página de login', async ({ page }) => {

  await page.goto('https://develop.persimmon.life/');

  await page.getByRole('link', { name: 'Login' }).click();

  await expect(page).toHaveURL(
    'https://develop.persimmon.life/login'
  );

  await expect(
    page.getByText('Login or sign up to continue')
  ).toBeVisible();

});