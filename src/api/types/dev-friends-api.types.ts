export interface Squad {
  id: number;
  name: string;
  devsCount: number;
}

export interface Dev {
  id: number;
  idSquad: number;
  firstName: string;
  avatar: string;
  bio: string;
  jobTitle: string;
}

export interface ApiResult<T> {
  result: T;
}
