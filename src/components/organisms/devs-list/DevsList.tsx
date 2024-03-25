import { FaceFrownIcon } from '@heroicons/react/24/solid';

import { DevFriendsApi } from '../../../api/dev-friends.api';
import type { SearchParams } from '../../../types/search-params.type';
import { Dev } from '../../molecules/Dev';

import { getSelectedSquadsFrom } from './logic/get-selected-squads-from-search-params.logic';

type DevsListProps = {
  searchParams: SearchParams;
};

export const DevsList = async ({ searchParams }: DevsListProps) => {
  const selectedSquads = getSelectedSquadsFrom(searchParams);
  const devs = await DevFriendsApi.devsBySquads(selectedSquads);

  if (!devs?.length && selectedSquads.length > 0) {
    return (
      <div className="flex flex-col items-center rounded-xl p-4">
        <FaceFrownIcon className="h-20 w-20 text-slate-500" />
        No devs found
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4">
      {devs.map((dev) => (
        <Dev key={dev.id} {...dev} />
      ))}
    </div>
  );
};
