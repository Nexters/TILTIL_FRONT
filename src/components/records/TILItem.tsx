import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { DimmedTag, Tag } from 'components/TagButton';
import React from 'react';
import { dimmedElementStyle } from 'styles/styled';
import media from 'utils/media';

interface TILItemProps {
  dimmed?: boolean;
}
type StyleProps = Pick<TILItemProps, 'dimmed'>;

const TILItem: React.VFC<TILItemProps> = ({ dimmed = false }) => {
  if (dimmed) {
    return (
      <Wrapper className="p-2" dimmed>
        <Date dimmed />
        <Title />

        <TagList>
          <DimmedTag />
          <DimmedTag />
        </TagList>
      </Wrapper>
    );
  }

  return (
    <Wrapper className="p-2">
      <Date>2022.02.03</Date>
      <Title>일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사</Title>

      <TagList>
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

const Wrapper = styled.section<StyleProps>`
  display: flex;
  flex-direction: column;

  height: 146px;
  border-radius: 12px;
  background-color: ${({ theme: { colors } }) => colors.background.white};

  ${media.mobile} {
    height: auto;
  }

  ${({ dimmed = false }) =>
    dimmed
      ? css`
          /* Title */
          h3 {
            ${dimmedElementStyle}
            margin-top: 6px;
            width: 57.5%;
            height: 22px;
            border-radius: 4px;

            ${media.mobile} {
              margin-bottom: 14px;
            }
          }
        `
      : css`
          /* TagList */
          ul {
            ${media.mobile} {
              margin-bottom: 2px;
            }
          }
        `}
`;

const Date = styled.div<StyleProps>`
  ${({ theme: { typography, colors }, dimmed = false }) =>
    dimmed
      ? css`
          ${dimmedElementStyle}
          width: 25%;
          height: 18px;
          border-radius: 4px;
        `
      : css`
          ${typography.body5}
          color: ${colors.text.subdued};
        `}
`;

const Title = styled.h3`
  ${({ theme: { typography } }) => typography.title}
  margin-top: 8px;

  ${media.mobile} {
    margin-bottom: 16px;
  }
`;

const TagList = styled.ul<StyleProps>`
  display: flex;
  column-gap: 7px;
  margin: auto 0 0;
`;

export default TILItem;
