import colors from './colors';
import typography from './typography';

const size = {
  mobile: 599,
  desktop: 744,
};

const devices = {
  mobile: `(max-width: ${size.mobile})`,
};

const header = {
  desktop: 56,
};

const padding = {
  lg: 48,
  md: 24,
  sm: 16,
};

const zIndex = {
  header: 999,
};

const theme = {
  size,
  devices,
  header,
  padding,
  typography,
  colors,
  zIndex,
};

export type ThemeType = typeof theme;

export default theme;
