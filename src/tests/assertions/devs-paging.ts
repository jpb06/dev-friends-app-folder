import { expect, type Locator, type Page } from '@playwright/test';

const findContainer = async (page: Page) => {
  const pagingContainer = page.getByTestId('devs-paging');
  await expect(pagingContainer).toBeVisible();

  return pagingContainer;
};

const findBackButton = async (container: Locator) => {
  const backButton = container.getByRole('button', { disabled: true });
  await expect(backButton).toBeVisible();
};

const findNextButton = async (container: Locator) => {
  const nextButton = container.getByRole('button', { name: 'Page 2' });
  await expect(nextButton).toBeVisible();
};

export const devsPaging = {
  container: findContainer,
  backButton: findBackButton,
  nextButton: findNextButton,
};
