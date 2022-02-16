import axios from 'axios';
import { userKeys } from 'queryKeys/userKeys';
import { useQuery } from 'react-query';

import { Api } from './api';

const api = new Api();

export const useFetchMe = () => {
  return useQuery(userKeys.me, () => axios.get('https://api.bing-bong.today/user/me'));
};
