import {
  createSearchParamsCache,
  parseAsArrayOf,
  parseAsInteger,
} from 'nuqs/server';

export const searchParamsCache = createSearchParamsCache({
  page: parseAsInteger.withDefault(1),
  squads: parseAsArrayOf(parseAsInteger, '-').withDefault([-1]),
});
