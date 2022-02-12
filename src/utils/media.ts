import theme from 'styles/theme';

export const mediaQuery = (maxWidth: number) => `
  @media (max-width: ${maxWidth}px)
`;

const media = {
  tablet: mediaQuery(theme.size.desktop),
  mobile: mediaQuery(theme.size.mobile),
  custom: mediaQuery,
};

export default media;
