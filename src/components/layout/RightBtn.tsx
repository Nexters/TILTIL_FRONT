import { ROUTE } from 'constants/route';

import styled from '@emotion/styled';
import { Cancel, More, Share, User } from 'assets';
import Link from 'next/link';
import React from 'react';

import { HeaderProps } from './constants';

const RightBtn: React.VFC<HeaderProps> = ({ pathname, asPath }) => {
  switch (pathname) {
    case ROUTE.main_login:
      // TODO: 공유 링크로 접근했을 때 예외처리
      return (
        <Wrapper>
          <button type="button">
            <Share />
          </button>
          <Link href="/" passHref>
            <a href="replace">
              <User />
            </a>
          </Link>
        </Wrapper>
      );

    case ROUTE.login:
      return (
        <button type="button">
          <Cancel />
        </button>
      );

    case ROUTE.records_detail:
      if (/abc/.test(asPath)) {
        // TODO: 암묵지 수정일 때 예외처리
        return <></>;
      }
      return (
        <button type="button">
          <More />
        </button>
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

export default RightBtn;
