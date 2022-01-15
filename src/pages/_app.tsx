import React, { useState } from "react";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from 'recoil'        

import theme from "../styles/theme";
import globalStyle from "../styles/globalStyle";
import { Global, ThemeProvider } from "@emotion/react";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Global styles={globalStyle} />
          <Component {...pageProps} />
          </ThemeProvider>
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
