import { type Page, expect } from '@playwright/test';

const findContainer = async (page: Page) => {
  const skeleton = page.getByTestId('devs-list-skeleton');
  await expect(skeleton).toBeVisible();

  return skeleton;
};

export const devsListSkeleton = {
  container: findContainer,
};
