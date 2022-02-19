import styled from '@emotion/styled';
import { Icon } from 'components/icon/Icon';
import Header from 'components/layout/Header';
import React from 'react';
import { PageWrapper } from 'styles/styled';

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
      404 에러 페이지
    </PageWrapper>
  );
};

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export default Custom404;
