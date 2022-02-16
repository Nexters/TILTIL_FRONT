import axios from 'axios';
import { userKeys } from 'queryKeys/userKeys';
import { useQuery } from 'react-query';

import api from './interceptor';

export const useFetchMe = () => {
  return useQuery(userKeys.me, () => api.users.userUsingGet());
};
