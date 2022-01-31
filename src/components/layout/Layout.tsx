import { ROUTE, Route } from 'constants/route';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React from 'react';
import { PathProps } from 'types/common';

import Header from './Header';

const Layout: React.FC = ({ children }) => {
  const route = useRouter();
  const { pathname, asPath } = route;

  return (
    <Wrapper>
      <Header pathname={pathname as Route} asPath={asPath} />
      <Main pathname={pathname as Route}>{children}</Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: ${({ theme: { main } }) => main.width}px;
  width: 100%;
`;

const Main = styled.main<PathProps>`
  ${({ theme: { header, colors }, pathname }) => {
    const height = pathname === ROUTE.main ? '100vh' : `calc(100vh - ${header.height}px)`;

    return css`
      height: ${height};
      background: ${colors.gray000};
    `;
  }}
`;

export default Layout;
