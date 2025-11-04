import { test, expect } from '@playwright/test';

test.describe('Anasac Home Page', () => {

  test('Validar título e elementos principais', async ({ page }) => {
    await page.goto('https://anasac.com/en/');

    // Verifica o título
    await expect(page).toHaveTitle(/Anasac/i);

    // Verifica se existe algum menu de navegação (resiliente)
    const nav = page.locator('nav, header, .elementor-nav-menu');
    await expect(nav.first()).toBeVisible();

    // Verifica se o link "Contact" existe (em qualquer forma de "Contact us" ou "Contáctanos")
    const contactLink = page.locator('a:has-text("Contact")');
    await expect(contactLink.first()).toBeVisible();
  });

});
