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
  const badges = await multiSelect.getByTestId('badge').all();
  expect(badges).toHaveLength(4);
  for (const badge of badges) {
    const text = await badge.textContent();

    const result = items.some(
      (regex) => text !== undefined && text?.match(regex),
    );
    expect(result).toBe(true);
  }
};

export const multiSelect = {
  container: findContainer,
  addButton: findAddButton,
  combobox: findCombobox,
  items: findItems,
};
