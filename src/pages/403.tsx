import { ROUTE } from 'constants/route';

import styled from '@emotion/styled';
import { LockIcon } from 'assets/svgs';
import Link from 'next/link';
import React from 'react';
import colors from 'styles/colors';
import { Main, PageWrapper } from 'styles/styled';
import media from 'utils/media';

import ButtonSmall from '../components/ButtonSmall';
import { Icon } from '../components/icon/Icon';
import Header from '../components/layout/Header';

import * as S from './404';

const Custom403 = () => {
  return (
    <PageWrapper>
      <Header
        title={
          <S.Title>
            <Icon name="logo" width={86} fill={colors.icon.idle} />
          </S.Title>
        }
      />
      <Main>
        <Wrapper>
          <LockIcon />
          <ErrorTitle>접근할 수 없는 페이지 입니다.</ErrorTitle>
          <Text className="mb-4">
            현재 URL은 접근 권한이 없는 페이지입니다.
            <br />
            로그인 계정을 확인하시거나
            <br />
            다른 페이지를 이용해주세요.
          </Text>

          <Link href={ROUTE.landing} passHref>
            <ButtonSmall backgroundColor={['primary', 'default']} textColor={['text', 'inverse']}>
              홈으로 가기
            </ButtonSmall>
          </Link>
        </Wrapper>
      </Main>
    </PageWrapper>
  );
};

const Wrapper = styled(S.Wrapper)`
  margin: 142px auto 0;

  ${media.mobile} {
    margin: 98px auto 0;
  }
`;

const ErrorTitle = styled(S.ErrorTitle)`
  margin: 12px 0 24px;
`;

const Text = styled(S.Text)`
  width: min(344px, 100%);
`;

export default Custom403;
