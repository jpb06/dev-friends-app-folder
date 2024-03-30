import { Squad } from '@api';

export const toMultiSelectValue = (squads: Squad[]) =>
  squads.map(({ id, name }) => ({
    id: `${id}`,
    label: name,
  }));
