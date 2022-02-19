import styled from '@emotion/styled';
import { ChartIcon } from 'assets/svgs';
import React from 'react';
import theme from 'styles/theme';
import { PartialPick } from 'types/common';
import media from 'utils/media';

import { Icon } from './icon/Icon';
import Tag from './Tag';
import { Text } from './Text';

// interface RecordStatisticsProps {}

const RecordStatistics = () => {
  return (
    <Wrapper className="mx-6 mt-3">
      <TitleWrapper>
        <Icon name="chart" />
        <Text typography="h3">나의 암묵지 정보</Text>
      </TitleWrapper>
      <CardsWrapper className="my-3">
        <Card className="p-2">
          <Icon className="mb-1" name="fire" />
          <CardTitle typography="caption1" className="mt-2">
            연속으로
          </CardTitle>
          <CardDescription typography="subTitle3">1일 달성</CardDescription>
        </Card>
        <Card className="p-2">
          <Icon className="mb-1" name="good" />
          <CardTitle typography="caption1" className="mt-2">
            자주 쓰는 요일
          </CardTitle>
          <CardDescription typography="subTitle3">월요일</CardDescription>
        </Card>
        <Card className="p-2">
          <Icon className="mb-1" name="write" />
          <Text typography="caption1" className="mt-2">
            많이 키운 암묵지는
          </Text>
          <TagsWrapper>
            <Tag category="learn" status="active" />
            <Tag category="curious" status="active" />
            <Tag category="good" status="active" />
            <Tag category="improve" status="active" />
          </TagsWrapper>
        </Card>
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

const Card = styled.div`
  display: flex;
  min-width: 175px;
  height: 149px;
  background-color: ${theme.colors.background.white};
  border-radius: 10px;
  flex-direction: column;
`;

const CardTitle = styled(Text)`
  margin-top: 12px;
  color: ${theme.colors.text.normal};
`;

const CardDescription = styled(Text)`
  margin-top: 12px;
  color: ${theme.colors.text.highlight};
`;

const TagsWrapper = styled.div`
  display: flex;
  margin-top: 12px;
  white-space: nowrap;

  span + span {
    margin-left: 7px;
  }
`;

export default RecordStatistics;
