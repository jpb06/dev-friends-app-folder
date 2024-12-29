import { Suspense } from 'react';

import { DevFriendsApi } from '@api';
import { DevsListPagingSkeleton } from '@client/molecules';
import { SquadsSelector } from '@client/organisms';
import { DevsList, DevsListSkeleton } from '@server/organisms';

import type { SearchParams } from 'nuqs';
import { searchParamsCache } from '../logic';

type MainPageProps = {
  searchParams: Promise<SearchParams>;
};

const MainPage = async ({ searchParams }: MainPageProps) => {
  const squads = await DevFriendsApi.allSquads();
  const { squads: querySquads, page } =
    await searchParamsCache.parse(searchParams);

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

// biome-ignore lint/style/noDefaultExport: next
export default MainPage;
