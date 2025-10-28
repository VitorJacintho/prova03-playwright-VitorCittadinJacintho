import { test, expect } from '@playwright/test';

test.describe('Anasac Contact Form', () => {

  test('Preencher e enviar o formulário de contato', async ({ page }) => {

    // 1️⃣ Acessar a página
    await page.goto('https://anasac.com/en/contactanos/');

    // 2️⃣ Preencher os campos
    await page.getByPlaceholder('First Name').fill('Vitor');
    await page.getByPlaceholder('Last Name').fill('Cittadin');
    await page.getByPlaceholder('Email').fill('vitor.teste@example.com');
    await page.getByPlaceholder('Phone').fill('+55 11 99999-9999');
    await page.getByPlaceholder('Country').fill('Brazil');
    await page.getByPlaceholder('Company').fill('Teste QA Ltda');
    await page.getByPlaceholder('Message').fill('Mensagem de teste automática do Playwright.');

    // 3️⃣ Marcar o checkbox de aceite da políticay
    await page.locator('input[type="checkbox"]').check();

    // 4️⃣ Clicar no botão de enviar
    await page.getByRole('button', { name: /send/i }).click();

    // 5️⃣ (Opcional) Validar o comportamento esperado
    // Exemplo: verificar mensagem de sucesso ou mudança de URL
    await expect(page).toHaveURL(/contactanos/);
    // ou, se aparecer mensagem de sucesso:
    // await expect(page.getByText(/thank you/i)).toBeVisible();

  });

});
