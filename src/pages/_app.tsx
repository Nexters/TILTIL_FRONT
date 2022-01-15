import { Global, ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";

import theme from "../styles/theme";
import globalStyle from "../styles/globalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
