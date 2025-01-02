import type { Squad } from '../../api';
import { apiFetch } from '../../api/logic/fetch-wrapper.logic';

export const fetchAllSquads = async () => apiFetch<Squad[]>('squads');
