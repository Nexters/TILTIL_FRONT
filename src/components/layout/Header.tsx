import { ROUTE } from 'constants/route';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { PathProps } from 'types/common';

import { HeaderProps } from './constants';
import HeaderTitle from './HeaderTitle';
import LeftBtn from './LeftBtn';
import RightBtn from './RightBtn';

const Header: React.VFC<HeaderProps> = (props) => {
  const { pathname } = props;

  if (pathname === ROUTE.main) {
    return <></>;
  }

  return (
    <Wrapper pathname={pathname}>
      <div>
        <LeftBtn {...props} />
      </div>
      <HeaderTitle {...props} />
      <div>
        <RightBtn {...props} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header<PathProps>`
  position: sticky;
  top: 0px;
  display: flex;
  justify-content: space-between;

  > div {
    min-width: 24px;
    display: flex;
    align-items: center;
  }

  ${({ theme: { header, colors }, pathname }) => {
    return css`
      height: ${header.height}px;
      padding: 0 ${header.padding}px;
      background: ${pathname === ROUTE.records ? colors.blue90 : colors.gray000};
    `;
  }}
`;

export default Header;
