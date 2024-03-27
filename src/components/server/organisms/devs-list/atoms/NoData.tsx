import { FaceFrownIcon } from '@heroicons/react/24/outline';

export const NoData = () => (
  <div className="flex flex-col items-center rounded-xl p-4">
    <FaceFrownIcon className="h-20 w-20 text-slate-500" />
    No devs found
  </div>
);
