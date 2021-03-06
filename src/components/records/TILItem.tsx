import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { TilSimpleResponse } from 'apis/api';
import Tag, { DimmedTag } from 'components/Tag';
import React from 'react';
import { dimmedElementStyle } from 'styles/styled';
import media from 'utils/media';

type TILItemProps = TilSimpleResponse & {
  dimmed?: boolean;
};
type StyleProps = Pick<TILItemProps, 'dimmed'>;

const TILItem: React.VFC<TILItemProps> = ({
  title,
  date,
  hasLearnContent,
  hasImproveContent,
  hasWellContent,
  hasQuestionContent,
  dimmed = false,
}) => {
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
      <Date>{date?.replace(/-/g, '.')}</Date>
      <Title>{title}</Title>

      <TagList>
        {hasLearnContent && (
          <li>
            <Tag category="learn" status="active" />
          </li>
        )}
        {hasWellContent && (
          <li>
            <Tag category="good" status="active" />
          </li>
        )}
        {hasImproveContent && (
          <li>
            <Tag category="improve" status="active" />
          </li>
        )}
        {hasQuestionContent && (
          <li>
            <Tag category="curious" status="active" />
          </li>
        )}
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

export default React.memo(TILItem);
