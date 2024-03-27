import { DevFriendsApi } from '@api';
import { Dev } from '@client/molecules';
import type { SearchParams } from '@types';

import { NoData } from './atoms/NoData';
import { getSelectedSquadsFrom } from './logic/get-selected-squads-from-search-params.logic';

type DevsListProps = {
  searchParams: SearchParams;
};

export const DevsList = async ({ searchParams }: DevsListProps) => {
  const selectedSquads = getSelectedSquadsFrom(searchParams);
  const devs = await DevFriendsApi.devsBySquads(selectedSquads);

  if (!devs?.length) {
    return <NoData />;
  }

  return (
    <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-4">
      {devs.map((dev) => (
        <Dev key={dev.id} {...dev} />
      ))}
    </div>
  );
};
