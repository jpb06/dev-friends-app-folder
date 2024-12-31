import { enforceMinimumDuration } from './logic/enforce-minimum-duration.logic';
import { apiFetch, apiPaginatedFetch } from './logic/fetch-wrapper.logic';
import type { Dev, Squad } from './types/dev-friends-api.types';
import type { Pagination } from './types/pagination.type';

const minDuration = 300;

const allSquads = async () => {
  const promise = apiFetch<Squad[]>('squads');

  return await enforceMinimumDuration(promise, minDuration);
};

const allDevs = async () => {
  const promise = apiFetch<Dev[]>('devs');

  return await enforceMinimumDuration(promise, minDuration);
};

const squadDevs = async (squadId: string) => {
  const promise = apiPaginatedFetch<Dev[]>(`squads/${squadId}/devs`);

  return await enforceMinimumDuration(promise, minDuration);
};

const devsBySquads = async (squadsIds: number[], page = 1) => {
  if (squadsIds.length === 0) {
    return enforceMinimumDuration(
      Promise.resolve({
        data: [] as Dev[],
        page: undefined as Pagination,
        total: 0,
      }),
      minDuration,
    );
  }

  const idSquads =
    squadsIds.length === 1 && squadsIds[0] === -1 ? [1, 2, 3, 4] : squadsIds;

  const promise = apiPaginatedFetch<Dev[]>(
    `devs/by-squads?page=${page}`,
    'POST',
    {
      idSquads,
    },
  );

  return await enforceMinimumDuration(promise, minDuration);
};

const changeDevSquad = async (squadId: number, devId: number) => {
  const promise = apiFetch<string>('devs/change-squad', 'POST', {
    idSquad: squadId,
    idDev: devId,
  });

  return await enforceMinimumDuration(promise, minDuration);
};

export const DevFriendsApi = {
  allSquads,
  allDevs,
  squadDevs,
  devsBySquads,
  changeDevSquad,
};
