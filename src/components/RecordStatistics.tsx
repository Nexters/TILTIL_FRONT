import styled from '@emotion/styled';
import { TilStatisticsResponse } from 'apis/api';
import React from 'react';
import colors from 'styles/colors';
import theme from 'styles/theme';

import Card from './Card';
import { Icon } from './icon/Icon';
import { Text } from './Text';

interface Props {
  statistics?: TilStatisticsResponse;
}

type CategoryName = keyof typeof colors.category;

const DAY_OF_WEEKS = {
  MONDAY: '월요일',
  TUESDAY: '화요일',
  WEDNESDAY: '수요일',
  THURSDAY: '목요일',
  FRIDAY: '금요일',
  SATURDAY: '토툐일',
  SUNDAY: '일요일',
};

const CATEGORIES: { [key: string]: CategoryName } = {
  LEARN: 'learn',
  WELL: 'good',
  IMPROVE: 'improve',
  QUESTION: 'curious',
};

const RecordStatistics: React.VFC<Props> = ({ statistics = {} }) => {
  return (
    <Wrapper className="mx-6 mt-3">
      <TitleWrapper>
        <Icon name="chart" />
        <Text typography="h3">나의 암묵지 정보</Text>
      </TitleWrapper>
      <CardsWrapper className="my-3">
        <Card iconName="fire" title="연속으로" description={`${statistics.mostWriteDay}일 달성`} />
        <Card
          iconName="good"
          title="자주 쓰는 요일"
          description={statistics.mostDay?.map((key) => DAY_OF_WEEKS[key]).join(' ')}
        />
        <Card
          iconName="write"
          title="많이 키운 암묵지는"
          categories={statistics.mostTilCategories?.map((key) => CATEGORIES[key])}
        />
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
