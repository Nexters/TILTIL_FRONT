import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

const Header: React.VFC = () => {
  return <Wrapper>헤더</Wrapper>;
};

const Wrapper = styled.header`
  position: sticky;
  top: 0px;

  ${({ theme: { header, colors } }) => {
    return css`
      height: ${header.height}px;
      padding: 0 ${header.padding}px;
      background: ${colors.gray300};
    `;
  }}
`;

export default Header;
