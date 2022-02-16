import { ROUTE } from 'constants/route';

import { Global, ThemeProvider } from '@emotion/react';
import axios, { AxiosError } from 'axios';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

import globalStyle from '../styles/globalStyle';
import theme from '../styles/theme';

import '../styles/fonts.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isAuthorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    setAuthorized(true);
  }, []);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
        onError: (error) => {
          const { response } = error as AxiosError;
          switch (response?.status) {
            case 401:
              router.push(ROUTE.login);
              break;
            default:
            // route error page
          }
        },
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>
          <ThemeProvider theme={theme}>
            <Global styles={globalStyle} />
            {isAuthorized && <Component {...pageProps} />}
          </ThemeProvider>
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
