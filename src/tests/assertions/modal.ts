import { expect, Locator, Page } from '@playwright/test';

const findContainer = async (page: Page) => {
  const modal = page.getByTestId('change-dev-squad-form');
  await expect(modal).toBeVisible();

  return modal;
};

const findTitle = async (modal: Locator, devName: string) => {
  const text = modal.getByText(`Move ${devName} to another squad`);
  await expect(text).toBeVisible();
};

const findSelect = async (modal: Locator) => {
  const select = modal.getByRole('combobox');
  await expect(select).toBeVisible();

  return select.inputValue();
};

const findButton = async (modal: Locator) => {
  const button = modal.getByRole('button');
  await expect(button).toBeVisible();

  return button;
};

const findLoader = async (modal: Locator, name: string, squad: string) => {
  const loader = modal.getByRole('progressbar');
  await expect(loader).toBeVisible();

  const title = modal.getByText(`Moving ${name} to squad ${squad}`);
  await expect(title).toBeVisible();
};

export const modal = {
  container: findContainer,
  title: findTitle,
  select: findSelect,
  button: findButton,
  loader: findLoader,
};
