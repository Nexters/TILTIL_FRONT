import styled from '@emotion/styled';
import React from 'react';
import theme from 'styles/theme';

import Card from './Card';
import { Icon } from './icon/Icon';
import { Text } from './Text';

const RecordStatistics: React.VFC = () => {
  return (
    <Wrapper className="mx-6 mt-3">
      <TitleWrapper>
        <Icon name="chart" />
        <Text typography="h3">나의 암묵지 정보</Text>
      </TitleWrapper>
      <CardsWrapper className="my-3">
        <Card iconName="fire" title="연속으로" description="1일 달성" />
        <Card iconName="good" title="자주 쓰는 요일" description="월요일" />
        <Card iconName="write" title="많이 키운 암묵지는" categories={['learn', 'curious', 'good', 'improve']} />
      </CardsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: ${theme.colors.text.highlight};
  align-items: center;

  div & div {
    margin-right: 4px;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  flex-direction: row;

  div + div {
    margin-left: 16px;
  }
`;

export default RecordStatistics;
