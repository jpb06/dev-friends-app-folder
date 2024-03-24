import { cache } from 'react';

import { api } from './logic/ky.instance';
import { unwrapResult } from './logic/unwrap-result.logic';
import { ApiResult, Dev, Squad } from './types/dev-friends-api.types';

const allSquads = cache(async () =>
  api.get('squads').json<ApiResult<Squad[]>>().then(unwrapResult),
);

const allDevs = cache(async () =>
  api.get('devs').json<ApiResult<Dev[]>>().then(unwrapResult),
);

const squadDevs = cache(async (squadId: string) =>
  api.get(`squads/${squadId}/devs`).json<ApiResult<Dev[]>>().then(unwrapResult),
);

const devsBySquads = cache(async (squadsIds: number[]) => {
  if (squadsIds.length === 0) {
    return Promise.resolve([]);
  }

  return api
    .post('devs/by-squads', {
      json: {
        idSquads: squadsIds,
      },
    })
    .json<ApiResult<Dev[]>>()
    .then(unwrapResult);
});

const changeDevSquad = async (squadId: string, devId: string) =>
  api
    .post('devs/change-squad', {
      json: {
        idSquad: squadId,
        idDev: devId,
      },
    })
    .json<ApiResult<string>>()
    .then(unwrapResult);

export const DevFriendsApi = {
  allSquads,
  allDevs,
  squadDevs,
  devsBySquads,
  changeDevSquad,
};
