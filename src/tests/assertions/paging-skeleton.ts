import { expect, Locator, Page } from '@playwright/test';

const findContainer = async (page: Page) => {
  const skeleton = page.getByTestId('devs-paging-skeleton');
  await expect(skeleton).toBeVisible();

  return skeleton;
};

const findBackButton = async (skeleton: Locator) => {
  const backButton = skeleton.locator('.skeleton').first();
  await expect(backButton).toBeVisible();
};

export const findNextButton = async (skeleton: Locator) => {
  const nextButton = skeleton.locator('.skeleton').nth(1);
  await expect(nextButton).toBeVisible();
};

export const pagingSkeleton = {
  container: findContainer,
  backButton: findBackButton,
  nextButton: findNextButton,
};
