import { meKeys } from 'queryKeys/meKeys';
import { useMutation, useQuery } from 'react-query';

import api from './interceptor';

export const useFetchMe = () => {
  const { data } = useQuery(meKeys.all, () => api.users.userUsingGet(), {
    staleTime: Infinity,
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
