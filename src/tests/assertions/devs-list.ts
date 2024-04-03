import { expect, Locator, Page } from '@playwright/test';

const findContainer = async (page: Page) => {
  const list = page.getByTestId('devs-list');
  await expect(list).toBeVisible();

  return list;
};

const findList = async (container: Locator) => {
  const images = await container.getByRole('img').all();
  expect(images.length).toBe(20);

  return container;
};

const findFirstDev = async (container: Locator) => {
  const dev = container.getByTestId('dev-card').first();
  await expect(dev).toBeVisible();

  const name = await dev.getByTestId('dev-name').first().textContent();
  if (!name) {
    throw new Error('Could not find first dev name');
  }
  const squad = await dev.getByTestId('dev-squad').first().textContent();
  if (!squad) {
    throw new Error('Could not find first dev squad');
  }

  return { name, squad, container: dev };
};

export const devsList = {
  container: findContainer,
  list: findList,
  firstDev: findFirstDev,
};
