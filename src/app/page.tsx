import { Suspense } from 'react';

import { DevFriendsApi } from '../api/dev-friends.api';
import { DevsListSkeleton } from '../components/molecules/devs-list-skeleton/DevsListSkeleton';
import { DevsList } from '../components/organisms/devs-list/DevsList';
import { SquadsSelector } from '../components/organisms/squads-selector/SquadsSelector';
import type { SearchParams } from '../types/search-params.type';

type MainPageProps = {
  searchParams: SearchParams;
};

const MainPage = async ({ searchParams }: MainPageProps) => {
  const squads = await DevFriendsApi.allSquads();
  const selectedSquads = (searchParams?.squads as string | undefined) ?? '';

  return (
    <>
      <SquadsSelector squads={squads} />
      <Suspense
        fallback={<DevsListSkeleton />}
        key={
          selectedSquads
            ? JSON.stringify(selectedSquads.replace(/-/g, ''))
            : 'init'
        }
      >
        <DevsList searchParams={searchParams} />
      </Suspense>
    </>
  );
};
export default MainPage;
