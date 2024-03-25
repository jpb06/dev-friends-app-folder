import { apiUrl } from '../constants/api-url.constant';

import { throwIfNotOk } from './throw-if-not-ok.logic';
import { unwrapResult } from './unwrap-result.logic';

type Method = 'POST' | 'GET';

export const fetchWrapper = async <TResult>(
  path: string,
  method: Method = 'GET',
  body: unknown = undefined,
) =>
  fetch(`${apiUrl}/${path}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method,
    body: body ? JSON.stringify(body) : undefined,
  })
    .then(throwIfNotOk)
    .then(unwrapResult<TResult>);
