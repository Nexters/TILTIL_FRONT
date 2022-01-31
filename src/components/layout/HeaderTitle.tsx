import { HEADER_TITLE } from 'constants/route';

import styled from '@emotion/styled';
import React from 'react';

import { HeaderProps } from './constants';

type TitlePath = keyof typeof HEADER_TITLE;

const HeaderTitle: React.VFC<HeaderProps> = ({ pathname, asPath }) => {
  if (pathname in HEADER_TITLE) {
    return (
      <div>
        <Title>
          {(() => {
            if (/abc/.test(asPath)) {
              // TODO: 오늘의 암묵지 예외처리
              return HEADER_TITLE.todayRecord;
            }
            if (/abc/.test(asPath)) {
              // TODO: 암묵지 수정 예외처리
              return HEADER_TITLE.editRecord;
            }

            return HEADER_TITLE[pathname as TitlePath];
          })()}
        </Title>
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
