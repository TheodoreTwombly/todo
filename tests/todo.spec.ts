import { test, expect } from '@playwright/test';

test.describe('Управление задачей', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Отображение поля ввода', async ({ page }) => {
    const input = page.getByPlaceholder('What needs to be done?');
    await expect(input).toBeVisible();
  });

  test('Добавление задачи', async ({ page }) => {
    const input = page.getByPlaceholder('What needs to be done?');
    await expect(input).toBeVisible();

    await input.fill('milk');
    await input.press('Enter');

    const list = page.locator('.listWrapper');
    await expect(list).toHaveScreenshot();
  });

  test('Отметить задачу', async ({ page }) => {
    const input = page.getByPlaceholder('What needs to be done?');
    await expect(input).toBeVisible();

    await input.fill('milk');
    await input.press('Enter');

    const todo = page.getByRole('checkbox', { name: 'milk' });
    await todo.check();
    expect(todo).toBeChecked();

    const list = page.locator('.listWrapper');
    await expect(list).toHaveScreenshot();
  });

  test('Удалить задачу', async ({ page }) => {
    const input = page.getByPlaceholder('What needs to be done?');
    await expect(input).toBeVisible();

    await input.fill('milk');
    await input.press('Enter');

    const todo = page.getByLabel('milk');
    expect(todo).toBeVisible();

    await todo.hover();

    const deleteButton = page.getByTestId('deleteTodoButton');
    await deleteButton.click();

    const list = page.locator('.listWrapper');
    await expect(list).toBeEmpty();
  });
});
