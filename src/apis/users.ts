import { userKeys } from 'queryKeys/userKeys';
import { useMutation, useQuery } from 'react-query';

import api from './interceptor';

export const useFetchMe = () => {
  const { data } = useQuery(userKeys.me(), () => api.users.userUsingGet());
  return data;
};

export const useUpdateMe = () => {
  return useMutation((name: string) =>
    api.users.updateUsingPut({
      name,
    })
  );
};
