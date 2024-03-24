export interface Squad {
  id: number;
  name: string;
}

export interface Dev {
  id: number;
  idSquad: number;
  firstName: string;
  avatar: string;
}

export interface ApiResult<T> {
  result: T;
}
