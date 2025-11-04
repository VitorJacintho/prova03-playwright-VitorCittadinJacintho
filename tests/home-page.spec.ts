import { test, expect } from '@playwright/test';

test.describe('Anasac Home Page', () => {

  test('Validar título e elementos principais', async ({ page }) => {
    await page.goto('https://anasac.com/en/');

    await expect(page).toHaveTitle(/Anasac/i);

    const nav = page.locator('nav, header, .elementor-nav-menu');
    await expect(nav.first()).toBeVisible();

    const contactLink = page.locator('a:has-text("Contact")');
    await expect(contactLink.first()).toBeVisible();
  });

});
