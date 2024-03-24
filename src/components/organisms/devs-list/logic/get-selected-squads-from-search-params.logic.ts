import { SearchParams } from '../../../../types/search-params.type';

export const getSelectedSquadsFrom = (searchParams: SearchParams) => {
  const squadsParams = (searchParams['squads'] ?? '') as string;

  return squadsParams.length === 0
    ? []
    : squadsParams.split('-').map((el) => +el);
};
