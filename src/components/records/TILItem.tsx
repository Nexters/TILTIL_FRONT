import styled from '@emotion/styled';
import { Tag } from 'components/TagButton';
import React from 'react';
import media from 'utils/media';

const TILItem = () => {
  return (
    <Wrapper className="p-2">
      <span>2022.02.03</span>
      <Title>일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사</Title>

      <TagList className="mt-2">
        <li>
          <Tag category="learn" status="active">
            잘한 점
          </Tag>
        </li>
        <li>
          <Tag category="good" status="active">
            배운 점
          </Tag>
        </li>
        <li>
          <Tag category="improve" status="active">
            개선할 점
          </Tag>
        </li>
        <li>
          <Tag category="curious" status="active">
            궁금한 점
          </Tag>
        </li>
      </TagList>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 146px;
  border-radius: 12px;
  background-color: ${({ theme: { colors } }) => colors.background.white};

  > span {
    ${({ theme: { typography } }) => typography.body5}
    color: ${({ theme: { colors } }) => colors.text.subdued};
  }

  ${media.mobile} {
    height: auto;
  }
`;

const Title = styled.h3`
  ${({ theme: { typography } }) => typography.title}
  margin: 8px 0 16px 0;
`;

const TagList = styled.ul`
  display: flex;
  column-gap: 7px;

  ${media.mobile} {
    margin-bottom: 5px;
  }
`;

export default TILItem;
