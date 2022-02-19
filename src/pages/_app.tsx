import { ROUTE } from 'constants/route';

import { Global, ThemeProvider } from '@emotion/react';
import { setAuthorization } from 'apis/interceptor';
import { AxiosError } from 'axios';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { dialogStore } from 'states/dialogStore';

import '../styles/fonts.css';
import globalStyle from '../styles/globalStyle';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
        onError: (error) => {
          const { response } = error as AxiosError;
          switch (response?.status) {
            case 401: {
              router.push(ROUTE.login);
              break;
            }
            default:
            // route error page
          }
        },
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>
          <ThemeProvider theme={theme}>
            <Global styles={globalStyle} />
            <MyComponent>
              <Component {...pageProps} />
            </MyComponent>
          </ThemeProvider>
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
}

const MyComponent: FC = ({ children }) => {
  const dialogs = useRecoilValue(dialogStore);

  return (
    <>
      {children}
      <div className="dialogs">
        {dialogs.map(({ key, jsx }) => {
          return (
            <div key={key} id={key}>
              {jsx}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MyApp;
