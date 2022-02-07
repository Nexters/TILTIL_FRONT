import { css } from '@emotion/react';

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

const palette = {
  // blue
  blue600: '#00398E',
  blue550: '#0843DB',
  blue500: '#0066FF',
  blue400: '#2C75D8',
  blue300: '#3AA1FF',
  blue200: '#68C7EC',
  blue100: '#C1E1FF',
  blue90: '#EFF6FD',
  blue80: '#F5FAFF',

  // gray
  gray900: '#1D1D1F',
  gray800: '#434343',
  gray700: '#57595B',
  gray600: '#777680',
  gray500: '#ADAEB9',
  gray400: '#CDCED7',
  gray300: '#DADBE3',
  gray200: '#EEEEF4',
  gray100: '#F8F8F8',
  gray000: '#ffffff',
  blueGray200: '#E4EBF2',

  // state
  learn: '#9AD87D',
  good: '#68C7EC',
  improve: '#FD985B',
  curious: '#FFD684',
};

const colors = {
  font: {
    primary: palette.blue500,
    white: palette.gray000,
  },

  background: {
    primary: palette.blue500,
    secondary: palette.blue90,
    white: palette.gray000,
    global: palette.blueGray200,

    disabled: palette.gray300,
    hover: palette.blue550,
  },
};

const theme = {
  size,
  devices,
  padding,
  colors,
  fontSize,
};

export type ThemeType = typeof theme;

export default theme;
