import { ValueOf } from 'types/common';

export const ROUTE = {
  main: '/',
  main_login: '/[id]',
  login: '/login',
  records: '/records',
  records_detail: '/records/[recordId]',
  newRecords: '/records/new',
  my: '/my',
  myNickname: '/my/nickname',
} as const;

export type Route = ValueOf<typeof ROUTE>;
