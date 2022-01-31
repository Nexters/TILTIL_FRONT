import { ROUTE } from 'constants/route';
import React from 'react';
import { HeaderProps } from './constants';

import { Cancel, More, Share, User } from 'assets';
import Link from 'next/link';
import styled from '@emotion/styled';

const RightBtn: React.VFC<HeaderProps> = ({ pathname, asPath }) => {
  switch (pathname) {
    case ROUTE.main_login:
      // TODO: 공유 링크로 접근했을 때 예외처리
      return (
        <Wrapper>
          <Button type="button">
            <Share />
          </Button>
          <Link href="/">
            <User />
          </Link>
        </Wrapper>
      );

    case ROUTE.login:
      return (
        <Button type="button">
          <Cancel />
        </Button>
      );

    case ROUTE.records_detail:
      if (/abc/.test(asPath)) {
        // TODO: 암묵지 수정일 때 예외처리
        return <></>;
      }
      return (
        <Button type="button">
          <More />
        </Button>
      );

    default:
      return <></>;
  }
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 18px;
`;

const Button = styled.button`
  display: flex;
`;

export default RightBtn;
