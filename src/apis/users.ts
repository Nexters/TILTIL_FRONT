import { userKeys } from 'queryKeys/userKeys';
import { useMutation, useQuery } from 'react-query';

import api from './interceptor';

export const useFetchMe = (enabled = true) => {
  const { data } = useQuery(userKeys.me(), () => api.users.userUsingGet(), {
    staleTime: Infinity,
    enabled,
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
