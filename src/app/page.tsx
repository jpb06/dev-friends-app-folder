import { Suspense } from 'react';

import { DevFriendsApi } from '../api/dev-friends.api';
import { BubbleProgress } from '../components/atoms/BubblesProgress';
import { DevsList } from '../components/organisms/devs-list/DevsList';
import { SquadsSelector } from '../components/organisms/squads-selector/SquadsSelector';
import type { SearchParams } from '../types/search-params.type';

type MainPageProps = {
  searchParams: SearchParams;
};

const MainPage = async ({ searchParams }: MainPageProps) => {
  const squads = await DevFriendsApi.allSquads();
  const selectedSquads =
    (searchParams?.squads as string | undefined) ?? '1-2-3-4';

  return (
    <>
      <SquadsSelector squads={squads} />
      <Suspense
        fallback={<BubbleProgress />}
        key={JSON.stringify(selectedSquads.replace(/-/g, ''))}
      >
        <DevsList searchParams={searchParams} />
      </Suspense>
    </>
  );
};
export default MainPage;
