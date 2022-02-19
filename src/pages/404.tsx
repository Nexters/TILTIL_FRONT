import { ROUTE } from 'constants/route';

import styled from '@emotion/styled';
import { ErrorIcon } from 'assets/svgs';
import ButtonSmall from 'components/ButtonSmall';
import { Icon } from 'components/icon/Icon';
import Header from 'components/layout/Header';
import Link from 'next/link';
import React from 'react';
import { Main, PageWrapper } from 'styles/styled';

const Custom404: React.VFC = () => {
  return (
    <PageWrapper>
      <Header
        title={
          <Title>
            <Icon name="logo" width={86} />
          </Title>
        }
      />
      <Main>
        <Wrapper>
          <ErrorIcon />
          <ErrorTitle>페이지 경로가 올바르지 않습니다.</ErrorTitle>
          <Text className="mb-4">
            존재하지 않은 주소를 입력하셨거나,
            <br />
            요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
            <br />
            <br />
            올바른 URL을 입력하였는지 확인해주세요.
          </Text>

          <Link href={ROUTE.main} passHref>
            <ButtonSmall backgroundColor={['primary', 'default']} textColor={['text', 'inverse']}>
              홈으로 가기
            </ButtonSmall>
          </Link>
        </Wrapper>
      </Main>
    </PageWrapper>
  );
};

export const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export const Wrapper = styled.div`
  margin: 124px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ErrorTitle = styled.h2`
  ${({ theme: { typography } }) => typography.h2}
  margin: 8px 0 24px;
  color: ${({ theme: { colors } }) => colors.text.highlight};
  text-align: center;
`;

export const Text = styled.p`
  ${({ theme: { typography } }) => typography.body2}
  width: min(280px, 100%);
  color: ${({ theme: { colors } }) => colors.text.idle};
  text-align: center;
`;

export default Custom404;
