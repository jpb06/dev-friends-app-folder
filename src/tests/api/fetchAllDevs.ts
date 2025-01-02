import type { Dev } from '../../api';
import { apiPaginatedFetch } from '../../api/logic/fetch-wrapper.logic';

export const fetchAllDevs = async () =>
  apiPaginatedFetch<Dev[]>('devs?byPage=400');
