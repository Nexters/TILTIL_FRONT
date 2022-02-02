const size = {
  mobile: 360,
};

const devices = {
  mobile: `(max-width: ${size.mobile})`,
};

const main = {
  width: 744,
  padding: 16,
};

const header = {
  height: 56,
  padding: 24,
};

const colors = {
  // blue
  blue600: '#00398E',
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

  // state
  learn: '#9AD87D',
  good: '#68C7EC',
  improve: '#FD985B',
  curious: '#FFD684',
};

const theme = {
  size,
  devices,
  main,
  header,
  colors,
};

export type ThemeType = typeof theme;

export default theme;
