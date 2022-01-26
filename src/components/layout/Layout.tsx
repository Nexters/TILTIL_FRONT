import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

import Header from './Header';

const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: ${({ theme: { main } }) => main.width}px;
  width: 100%;
`;

const Main = styled.main`
  ${({ theme: { header, main } }) => {
    const height = `calc(100vh - ${header.height}px)`;

    return css`
      padding: 0 ${main.padding}px;
      height: ${height};
      background: white;
    `;
  }}
`;

export default Layout;
