import { test, expect } from '@playwright/test';

import { DevFriendsApi } from '../api';
import { fetchAllDevs } from '../tests/api';
import { fetchAllSquads } from '../tests/api/fetchAllSquads';
import {
  devsList,
  devsListSkeleton,
  devsPaging,
  modal,
  multiSelect,
  pagingSkeleton,
} from '../tests/assertions';

const url = 'http://localhost:3000';

test('has a squads selector', async ({ page }) => {
  const squads = await DevFriendsApi.allSquads();

  await page.goto(url);

  const select = await multiSelect.container(page);

  await Promise.all([
    multiSelect.addButton(select),
    multiSelect.combobox(select),
    multiSelect.items(
      select,
      squads.map(({ name }) => new RegExp(`^${name}$`)),
    ),
  ]);
});

test('has paging controls', async ({ page }) => {
  await page.goto(url);

  const skeleton = await pagingSkeleton.container(page);
  await Promise.all([
    pagingSkeleton.backButton(skeleton),
    pagingSkeleton.nextButton(skeleton),
  ]);

  const paging = await devsPaging.container(page);
  await Promise.all([
    devsPaging.backButton(paging),
    devsPaging.nextButton(paging),
  ]);
});

test('has a devs list', async ({ page }) => {
  await page.goto(url);

  await devsListSkeleton.container(page);

  const list = await devsList.container(page);
  await devsList.list(list);
});

test('can filter squads', async ({ page }) => {
  const [devs, squads] = await Promise.all([fetchAllDevs(), fetchAllSquads()]);

  await page.goto(url);

  await devsListSkeleton.container(page);
  await devsList.container(page);

  await expect(page.getByText(`${devs.total} results`)).toBeVisible();

  const selectedSquad = squads[3];

  const removeSquad = page
    .locator('div')
    .filter({ hasText: new RegExp(`^${selectedSquad.name}$`) })
    .locator('path');
  await expect(removeSquad).toBeVisible();

  await removeSquad.click();

  await pagingSkeleton.container(page);
  await devsListSkeleton.container(page);
  await devsPaging.container(page);


//   const updatedDevs = await fetchAllDevs();

//   const filteredDevs = updatedDevs.data.filter(
//     ({ idSquad }) => idSquad !== selectedSquad.id,
//   );

//await expect(page.getByText(`${filteredDevs.length} results`)).toBeVisible();
});

test('can change the squad of a dev', async ({ page }) => {
  await page.goto(url);

  const squads = await fetchAllSquads();

  //await devsListSkeleton.container(page);
  const list = await devsList.container(page);

  const { name, squad, container } = await devsList.firstDev(list);
  await container.click();

  const changeSquadModal = await modal.container(page);
  await modal.title(changeSquadModal, name);

  const selectedSquadId = await modal.select(changeSquadModal);
  const button = await modal.button(changeSquadModal);
  await button.click();

  await modal.loader(changeSquadModal, name, squad);

  await expect(changeSquadModal).toBeHidden();
  await expect(
    page.getByText(
      `${name} moved to squad ${squads.find((s) => s.id === +selectedSquadId)?.name}`,
    ),
  ).toBeVisible();

  const updatedDev = await devsList.firstDev(list);

  expect(updatedDev.name).toBe(name);
  expect(updatedDev.squad).toBe(
    squads.find(({ id }) => id === +selectedSquadId)?.name,
  );
});
