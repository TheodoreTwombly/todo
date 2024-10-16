import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  projects: [
    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  use: {
    baseURL: 'http://localhost:5173/todo/',
    testIdAttribute: 'data-qa',
  },
  timeout: 10000,
});
