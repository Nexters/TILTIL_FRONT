import { css } from '@emotion/react';

import colors from './colors';
import typography from './typography';

const size = {
  mobile: 599,
  desktop: 744,
};

const devices = {
  mobile: `(max-width: ${size.mobile})`,
};

const padding = {
  lg: 48,
  md: 24,
  sm: 16,
};

const fontSize = {
  h5: css`
    font-size: 18px;
    line-height: 23px;
    letter-spacing: -0.015em;
  `,
};

const theme = {
  size,
  devices,
  padding,
  typography,
  colors,
  fontSize,
};

export type ThemeType = typeof theme;

export default theme;
