import colors from './colors';
import typography from './typography';

const size = {
  mobile: 600,
  desktop: 744,
};

const devices = {
  mobile: `(min-width: ${size.mobile}px)`,
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
