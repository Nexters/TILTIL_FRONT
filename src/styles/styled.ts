import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Background } from 'types/styled';

import globalTheme from './theme';

// layout
export const PageWrapper = styled.div<{ background?: Background }>`
  max-width: ${({ theme: { size } }) => size.desktop}px;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: ${({ theme: { colors }, background = 'white' }) => colors.background[background]};
`;

type MainProps = { padding?: keyof typeof globalTheme.padding };
export const Main = styled.main<MainProps>`
  ${({ theme, padding }) => padding && `padding: 0 ${theme.padding[padding]}px`};
  min-height: ${({ theme: { header } }) => `calc(100vh - ${header.desktop}px)`};
`;

// common
export const dimmedElementStyle = css`
  background-color: ${globalTheme.colors.ui.skeleton};
  opacity: 0.6;
`;
