import { ValueOf } from 'types/common';

export const ROUTE = {
  users: '/users',
  users_detail: '/users/[id]',
  landing: '/',
  login: '/login',
  records: '/records',
  records_detail: '/records/[recordId]',
  newRecords: '/records/new',
  my: '/my',
  myNickname: '/my/nickname',

  // Error Page
  unauthorized: '/unauthorized',
  error: '/error',
} as const;

export type Route = ValueOf<typeof ROUTE>;
