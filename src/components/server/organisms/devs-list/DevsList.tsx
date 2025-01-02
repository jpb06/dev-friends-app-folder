import type { Squad } from '@api';
import { DevFriendsApi } from '@api';
import { DevCard, DevsListPaging } from '@client/molecules';
import { searchParamsCache } from '@logic';

import { NoData } from './atoms/NoData';

type DevsListProps = {
  squads: Squad[];
};

export const DevsList = async ({ squads }: DevsListProps) => {
  const { page, squads: querySquads } = searchParamsCache.all();

  const query = await DevFriendsApi.devsBySquads(querySquads, page);
  if (query.total === 0) {
    return <NoData />;
  }

  return (
    <>
      <DevsListPaging {...query} />
      <div
        data-testid="devs-list"
        className="grid w-full grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-4"
      >
        {query.data.map((dev) => (
          <DevCard key={dev.id} squads={squads} dev={dev} />
        ))}
      </div>
    </>
  );
};
