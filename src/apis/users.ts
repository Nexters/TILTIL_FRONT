import { userKeys } from 'queryKeys/userKeys';
import { useMutation, useQuery } from 'react-query';

import api from './interceptor';

export const useFetchMe = () => {
  const { data } = useQuery(userKeys.me(), () => api.users.userUsingGet(), {
    staleTime: Infinity,
    cacheTime: Infinity,
  });
  return data;
};

export const useUpdateUserMutation = () => {
  return useMutation((name: string) =>
    api.users.updateUsingPut({
      name,
    })
  );
};
