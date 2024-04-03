import { expect, Locator, Page } from '@playwright/test';

const findContainer = async (page: Page) => {
  const container = page.getByTestId('multi-select');
  await expect(container).toBeVisible();

  return container;
};

const findAddButton = async (multiSelect: Locator) => {
  const addButton = multiSelect.getByRole('button', {
    name: 'Add',
  });
  await expect(addButton).toBeVisible();

  return addButton;
};

const findCombobox = async (multiSelect: Locator) => {
  const select = multiSelect.getByRole('combobox');
  await expect(select).toBeVisible();

  return select;
};

const findItems = async (multiSelect: Locator, items: RegExp[]) => {
  const divs = multiSelect.locator('div');

  items
    .map((regex) => divs.filter({ hasText: regex }))
    .map(async (div) => {
      await expect(div).toBeVisible();
      await expect(div.locator('svg')).toBeVisible();
    });
};

export const multiSelect = {
  container: findContainer,
  addButton: findAddButton,
  combobox: findCombobox,
  items: findItems,
};
