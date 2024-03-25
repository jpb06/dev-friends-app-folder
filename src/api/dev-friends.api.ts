import { fetchWrapper } from './logic/fetch-wrapper.logic';
import { Dev, Squad } from './types/dev-friends-api.types';

const allSquads = async () => fetchWrapper<Squad[]>('squads?delayMs=2000');

const allDevs = async () => fetchWrapper<Dev[]>('devs?delayMs=1000');

const squadDevs = async (squadId: string) =>
  fetchWrapper<Dev[]>(`squads/${squadId}/devs?delayMs=1000`);

const devsBySquads = async (squadsIds: number[]) => {
  if (squadsIds.length === 0) {
    return Promise.resolve([]);
  }

  return fetchWrapper<Dev[]>('devs/by-squads?delayMs=1000', 'POST', {
    idSquads: squadsIds,
  });
};

const changeDevSquad = async (squadId: string, devId: string) =>
  fetchWrapper<string>('devs/change-squad?delayMs=1000', 'POST', {
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
