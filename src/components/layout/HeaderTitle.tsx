import { HEADER_TITLE } from 'constants/route';

import styled from '@emotion/styled';
import React from 'react';

import { HeaderProps } from './constants';

type TitlePath = keyof typeof HEADER_TITLE;

const HeaderTitle: React.VFC<HeaderProps> = ({ pathname, asPath }) => {
  if (pathname in HEADER_TITLE) {
    // TODO: 암묵지 수정 예외처리
    const title = /abc/.test(asPath) ? HEADER_TITLE.editRecord : HEADER_TITLE[pathname as TitlePath];

    return (
      <div>
        <Title>{title}</Title>
      </div>
    );
  }

  return <></>;
};

const Title = styled.h1`
  font-weight: bold;
  font-size: 18px;
`;

export default HeaderTitle;
