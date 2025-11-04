import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  reporter: [['html', { outputFolder: 'playwright-report' }]],
});
