import { tilKeys } from 'queryKeys/tilKeys';
import { useInfiniteQuery } from 'react-query';

import api from './interceptor';

export const useMyTils = (size: number) => {
  return useInfiniteQuery(tilKeys.lists(), ({ pageParam = 0 }) => getTilsPerPage(pageParam, size), {
    getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.nextPage : undefined),
  });
};

const getTilsPerPage = async (page: number, size: number) => {
  const { data } = await api.tils.readMyTilsUsingGet({
    page,
    size,
  });

  return { tils: data.tils, nextPage: page + 1, hasNext: data.hasNext };
};