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
  purple: '#8e89ff',
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
