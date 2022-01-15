import '@emotion/react';

import { ThemeType } from './theme';

declare module '@emotion/react' {
  export type Theme = ThemeType;
}
