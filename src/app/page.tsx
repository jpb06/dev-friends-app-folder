import { Suspense } from 'react';

import { DevFriendsApi } from '@api';
import { SquadsSelector } from '@client/organisms';
import { DevsList, DevsListSkeleton } from '@server/organisms';

import type { SearchParams } from '../types/search-params.type';

type MainPageProps = {
  searchParams: SearchParams;
};

const MainPage = async ({ searchParams }: MainPageProps) => {
  const squads = await DevFriendsApi.allSquads();
  const selectedSquads = (searchParams?.squads as string | undefined) ?? 'init';

  return (
    <>
      <SquadsSelector squads={squads} />
      <Suspense
        fallback={<DevsListSkeleton />}
        key={JSON.stringify(selectedSquads.replace(/-/g, ''))}
      >
        <DevsList searchParams={searchParams} />
      </Suspense>
    </>
  );
};
export default MainPage;
