import { Api } from './api';

const api = new Api({
  baseURL: 'https://api.bing-bong.today',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
  },
});

export const setAuthorization = (token: string) => {
  api.instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export default api;
