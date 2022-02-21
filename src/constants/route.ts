import { ValueOf } from 'types/common';

export const ROUTE = {
  landing: '/',
  main: '/[id]',
  login: '/login',
  records: '/records',
  records_detail: '/records/[recordId]',
  newRecords: '/records/new',
  my: '/my',
  myNickname: '/my/nickname',

  // Error Page
  403: '/403',
  404: '/404',
} as const;

export type Route = ValueOf<typeof ROUTE>;
