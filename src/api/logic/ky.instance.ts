import ky from 'ky';

export const api = ky.create({
  prefixUrl: 'https://devfriends-backend.fly.dev',
  cache: 'no-store',
});
