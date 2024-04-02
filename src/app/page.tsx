import { Suspense } from 'react';

import { DevFriendsApi } from '@api';
import { DevsListPagingSkeleton } from '@client/molecules';
import { SquadsSelector } from '@client/organisms';
import { DevsList, DevsListSkeleton } from '@server/organisms';

import { searchParamsCache } from '../logic';
import type { SearchParams } from '../types/search-params.type';

type MainPageProps = {
  searchParams: SearchParams;
};

const MainPage = async ({ searchParams }: MainPageProps) => {
  const squads = await DevFriendsApi.allSquads();
  const { squads: querySquads, page } = searchParamsCache.parse(searchParams);

  return (
    <>
      <SquadsSelector squads={squads} />
      <Suspense
        fallback={
          <>
            <DevsListPagingSkeleton />
            <DevsListSkeleton />
          </>
        }
        key={JSON.stringify({ querySquads, page })}
      >
        <DevsList squads={squads} />
      </Suspense>
    </>
  );
};
export default MainPage;
