import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Background } from 'types/styled';

import globalTheme from './theme';

// layout
export const PageWrapper = styled.div<{ background?: Background }>`
  width: 100%;
  max-width: ${({ theme: { size } }) => size.desktop}px;
  height: max-content;
  min-height: 100%;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme: { colors }, background = 'white' }) => colors.background[background]};
`;

type MainProps = { padding?: keyof typeof globalTheme.padding };
export const Main = styled.main<MainProps>`
  ${({ theme, padding }) => padding && `padding: 0 ${theme.padding[padding]}px`};
  padding-top: ${({ theme: { header } }) => header.desktop}px;
  flex: 1;
`;

// common
export const dimmedElementStyle = css`
  background-color: ${globalTheme.colors.ui.skeleton};
  opacity: 0.6;
`;
