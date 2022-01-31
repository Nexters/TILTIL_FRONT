import { ValueOf } from 'types/common';

export const ROUTE = {
  main: '/',
  main_login: '/[id]',
  login: '/login',
  records: '/records',
  records_detail: '/records/[recordId]',
  newRecords: '/records/new',
} as const;

export type Route = ValueOf<typeof ROUTE>;

export const HEADER_TITLE = {
  [ROUTE.records]: '나의 암묵지',
  [ROUTE.newRecords]: '암묵지 쌓기',
  [ROUTE.records_detail]: '암묵지 읽기',

  todayRecord: '오늘의 암묵지',
  editRecord: '암묵지 수정',
} as const;
