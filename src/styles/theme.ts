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

const theme = {
  size,
  devices,
  padding,
  typography,
  colors,
};

export type ThemeType = typeof theme;

export default theme;
