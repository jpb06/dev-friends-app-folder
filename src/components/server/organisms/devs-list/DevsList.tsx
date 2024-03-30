import { DevFriendsApi } from '@api';
import { DevCard, DevsListPaging } from '@client/molecules';
import { searchParamsCache } from '@logic';

import { NoData } from './atoms/NoData';

export const DevsList = async () => {
  const { page, squads } = searchParamsCache.all();

  const query = await DevFriendsApi.devsBySquads(squads, page);

  if (query.total === 0) {
    return <NoData />;
  }

  return (
    <>
      <DevsListPaging {...query} />
      <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-4">
        {query.data.map((dev) => (
          <DevCard key={dev.id} {...dev} />
        ))}
      </div>
    </>
  );
};
