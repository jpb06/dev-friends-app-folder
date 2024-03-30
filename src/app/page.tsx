import { Suspense } from 'react';

import { DevFriendsApi } from '@api';
import { SquadsSelector } from '@client/organisms';
import { DevsList, DevsListSkeleton } from '@server/organisms';

import { DevsListPagingSkeleton } from '../components/client/molecules/devs-list-paging/DevsListPagingSkeleton';
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
        <DevsList />
      </Suspense>
    </>
  );
};
export default MainPage;
