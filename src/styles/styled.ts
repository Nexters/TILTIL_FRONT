import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Background } from 'types/styled';

import theme from './theme';

export const PageWrapper = styled.div<{ background?: Background }>`
  max-width: ${({ theme: { size } }) => size.desktop}px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: ${({ theme: { colors }, background = 'white' }) => colors.background[background]};
`;

export const dimmedElementStyle = css`
  background-color: ${theme.colors.ui.skeleton};
  opacity: 0.6;
`;
