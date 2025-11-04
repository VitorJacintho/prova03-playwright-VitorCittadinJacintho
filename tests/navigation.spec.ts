import { test, expect } from '@playwright/test';

test.describe('Anasac Navigation', () => {

  test('Navegar até a seção de Produtos e voltar à Home', async ({ page }) => {
    await page.goto('https://anasac.com/en/');

    // Busca qualquer link que contenha "noticias" no texto
    const noticiasLink = page.locator('a:has-text("news")');
    await expect(noticiasLink.first()).toBeVisible();
    await noticiasLink.first().click();

    // Verifica se a URL contém "noticias"
    await expect(page).toHaveURL(/noticias/i);

    // Busca o link que leve de volta à página inicial (Home ou logo)
    const homeLink = page.locator('a[href*="/en"], a:has-text("Home")').first();
    await expect(homeLink).toBeVisible();
    await homeLink.click();

    await expect(page).toHaveURL(/anasac\.com\/en/i);
  });

});



