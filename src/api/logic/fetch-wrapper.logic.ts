import { throwIfNotOk } from './throw-if-not-ok.logic';
import { unwrapPaginatedResult, unwrapResult } from './unwrap-result.logic';

type Method = 'POST' | 'GET';

const apiUrl = process.env.API_URL ?? 'api-url-not-set';

const fetchWrapper = async (path: string, method: Method, body: unknown) =>
  fetch(`${apiUrl}/${path}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method,
    body: body ? JSON.stringify(body) : undefined,
  }).then(throwIfNotOk);

export const apiFetch = async <TResult>(
  path: string,
  method: Method = 'GET',
  body: unknown = undefined,
) => fetchWrapper(path, method, body).then(unwrapResult<TResult>);

export const apiPaginatedFetch = <TResult>(
  path: string,
  method: Method = 'GET',
  body: unknown = undefined,
) => fetchWrapper(path, method, body).then(unwrapPaginatedResult<TResult>);
