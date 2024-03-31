import { apiFetch, apiPaginatedFetch } from './logic/fetch-wrapper.logic';
import { Dev, Squad } from './types/dev-friends-api.types';
import { Pagination } from './types/pagination.type';

const allSquads = async () => apiFetch<Squad[]>('squads?delayMs=2000');

const allDevs = async () => apiPaginatedFetch<Dev[]>('devs?delayMs=1000');

const squadDevs = async (squadId: string) =>
  apiPaginatedFetch<Dev[]>(`squads/${squadId}/devs?delayMs=1000`);

const devsBySquads = async (squadsIds: number[], page = 1) => {
  if (squadsIds.length === 0) {
    return Promise.resolve({
      data: [] as Dev[],
      page: undefined as Pagination,
      total: 0,
    });
  }

  return apiPaginatedFetch<Dev[]>(
    `devs/by-squads?delayMs=1000&page=${page}`,
    'POST',
    {
      idSquads: squadsIds,
    },
  );
};

const changeDevSquad = async (squadId: number, devId: number) =>
  apiFetch<string>('devs/change-squad', 'POST', {
    idSquad: squadId,
    idDev: devId,
  });

export const DevFriendsApi = {
  allSquads,
  allDevs,
  squadDevs,
  devsBySquads,
  changeDevSquad,
};
