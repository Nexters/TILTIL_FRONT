import { Api, ApiConfig } from './api';

function getCookie(name: string) {
  if (typeof window === 'undefined') {
    return undefined;
  }
  const matches = document.cookie.match(
    // eslint-disable-next-line
    new RegExp(`(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`)
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

class FrontApi extends Api<unknown> {
  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<unknown> = {}) {
    super({ securityWorker, secure, format, ...axiosConfig });
    this.instance.interceptors.request.use(
      (config) => {
        const accessToken = getCookie('accessToken');
        // Do something before request is sent
        if (accessToken) {
          // eslint-disable-next-line no-param-reassign
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => {
        // Do something with request error
        return Promise.reject(error);
      }
    );
  }
}

const api = new FrontApi({
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
