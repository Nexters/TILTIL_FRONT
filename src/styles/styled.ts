import styled from '@emotion/styled';
import { Background } from 'types/styled';

interface PageProps {
  background?: Background;
}

export const PageWrapper = styled.div<PageProps>`
  max-width: ${({ theme: { main } }) => main.width}px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: ${({ theme: { colors }, background = 'white' }) => colors.background[background]};
`;
