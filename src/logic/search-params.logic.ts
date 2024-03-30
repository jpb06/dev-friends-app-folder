import {
  createSearchParamsCache,
  parseAsInteger,
  parseAsArrayOf,
} from 'nuqs/server';

export const searchParamsCache = createSearchParamsCache({
  page: parseAsInteger.withDefault(1),
  squads: parseAsArrayOf(parseAsInteger, '-').withDefault([]),
});
