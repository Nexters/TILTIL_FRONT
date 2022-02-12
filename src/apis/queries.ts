import { tilKeys } from 'queryKeys/tilKeys';
import { useQuery } from 'react-query';

import { Api } from './api';

const api = new Api();

// Example of a query that uses the `useQuery` hook.
export const useFetchTils = (query: { page?: number; size?: number }) => {
  return useQuery(tilKeys.list(query), () => api.tils.readMyTilsUsingGet(query));
};

export const useFetchTilDetail = (id: number) => {
  return useQuery(tilKeys.detail(id), () => api.tils.readTilUsingGet(id));
};
