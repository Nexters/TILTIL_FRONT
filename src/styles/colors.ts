import { css } from '@emotion/react';

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
  learnLight: '#D7FAC7',

  good: '#68C7EC',
  goodLight: '#DCF5FF',

  improve: '#FD985B',
  improveLight: '#FFE4D3',

  curious: '#FFD684',
  curiousLight: '#FFF0D1',

  // purple
  iris100: '#5D5FEF',
};

const highLight = {
  purple: palette.iris100,
};
const colors = {
  primary: {
    default: palette.blue500,
    dark: palette.blue600,
    light: palette.blue300,
    extraLight: palette.blue100,
    pressed: palette.blue550,
  },

  background: {
    default: palette.blue90,
    gray: palette.gray100,
    white: palette.gray000,
    global: palette.blueGray200,
    cancel: palette.gray200,
    pressed: palette.blue550,
    transparent: 'transparent',
  },

  ui: {
    disabled: palette.gray300,
    inputField: palette.blue80,
    divider: palette.gray200,
    skeleton: palette.blueGray200,
    subdued: palette.gray200,
  },

  icon: {
    idle: palette.gray800,
    subdued: palette.gray500,
  },

  text: {
    highlight: palette.blue400,
    idle: palette.gray800,
    subdued: palette.gray600,
    placeholder: palette.gray500,
    disabled: palette.gray300,
    inverse: palette.gray000,
    normal: palette.gray700,
  },

  category: {
    learn: {
      fill: palette.learnLight,
      active: palette.learn,
      disabled: palette.gray200,
    },
    good: {
      fill: palette.goodLight,
      active: palette.good,
      disabled: palette.gray200,
    },
    improve: {
      fill: palette.improveLight,
      active: palette.improve,
      disabled: palette.gray200,
    },
    curious: {
      fill: palette.curiousLight,
      active: palette.curious,
      disabled: palette.gray200,
    },
  },

  elevation: {
    elevation1: css`
      background-color: ${palette.gray000};
      box-shadow: 0px 8px 25px rgba(29, 29, 31, 0.06);
    `,
    elevation2: css`
      background-color: ${palette.gray000};
      box-shadow: 0px 4px 10px rgba(29, 29, 31, 0.12);
    `,
  },
  highLight,
};

export type CategoryStatus = keyof typeof colors.category.learn;

export default colors;
