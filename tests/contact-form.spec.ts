import { test, expect } from '@playwright/test';

test.describe('Anasac Contact Form', () => {

  test('Preencher e enviar o formulário de contato', async ({ page }) => {
    await page.goto('https://anasac.com/en/contactanos/');
    await page.getByPlaceholder('First Name').fill('Vitor');
    await page.getByPlaceholder('Last Name').fill('Cittadin');
    await page.getByPlaceholder('Email').fill('vitor.teste@example.com');
    await page.getByPlaceholder('Phone').fill('+55 11 99999-9999');
    await page.getByPlaceholder('Country').fill('Brazil');
    await page.getByPlaceholder('Company').fill('Teste QA Ltda');
    await page.getByPlaceholder('Message').fill('Mensagem de teste automática do Playwright.');
    await page.locator('input[type="checkbox"]').check();
    await page.getByRole('button', { name: /send/i }).click();
    await expect(page).toHaveURL(/contactanos/);
  });

});


