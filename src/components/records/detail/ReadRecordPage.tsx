/* eslint-disable react/no-array-index-key */
import { ROUTE } from 'constants/route';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { TilDetailResponse } from 'apis/api';
import { ButtonLine } from 'components/ButtonSmall';
import Header from 'components/layout/Header';
import Tag from 'components/Tag';
import dayjs from 'dayjs';
import Link from 'next/link';
import React from 'react';
import { Main, PageWrapper } from 'styles/styled';
import theme from 'styles/theme';
import convertNewLineToJSX from 'utils/convertNewLineToJSX';
import media from 'utils/media';

type Props = TilDetailResponse & { isLoading: boolean };
type StyledProps = { dimmed?: boolean };

const ReadRecordPage: React.VFC<Props> = ({
  isLoading,
  title,
  createAt,
  improveContent,
  questionContent,
  learnContent,
  wellContent,
}) => {
  return (
    <PageWrapper background="default">
      <Header title="암묵지 읽기" leftButton="home" rightButton={['more']} background="default" />

      <ReadMain>
        <MainHeader dimmed={isLoading}>
          <div>{dayjs(createAt).format('YYYY.MM.DD')}</div>
          <h1>{title}</h1>
        </MainHeader>

        <Wrapper>
          <ul>
            {isLoading ? (
              Array(3)
                .fill(1)
                .map((_, index) => (
                  <TilItem dimmed key={index}>
                    {Array(3)
                      .fill(1)
                      .map((__, _index) => (
                        <div key={_index} />
                      ))}
                  </TilItem>
                ))
            ) : (
              <>
                {learnContent && (
                  <TilItem>
                    <Label>
                      <Tag size="large" category="learn" status="active" />
                    </Label>
                    {convertNewLineToJSX(learnContent)}
                  </TilItem>
                )}
                {wellContent && (
                  <TilItem>
                    <Label>
                      <Tag size="large" category="good" status="active" />
                    </Label>
                    {convertNewLineToJSX(wellContent)}
                  </TilItem>
                )}
                {improveContent && (
                  <TilItem>
                    <Label>
                      <Tag size="large" category="improve" status="active" />
                    </Label>
                    {convertNewLineToJSX(improveContent)}
                  </TilItem>
                )}
                {questionContent && (
                  <TilItem>
                    <Label>
                      <Tag size="large" category="curious" status="active" />
                    </Label>
                    {convertNewLineToJSX(questionContent)}
                  </TilItem>
                )}
              </>
            )}
          </ul>

          <Link href={ROUTE.records} passHref>
            <ButtonLine type="button">다른 암묵지 보기</ButtonLine>
          </Link>
        </Wrapper>
      </ReadMain>
    </PageWrapper>
  );
};

const dimmedStyle = css`
  height: 22px;
  border-radius: 4px;
  background-color: ${theme.colors.ui.skeleton};
`;

const ReadMain = styled(Main)`
  display: flex;
  flex-direction: column;
`;

const MainHeader = styled.header<StyledProps>`
  padding: 40px ${({ theme: { padding } }) => padding.md}px 19px;

  ${media.mobile} {
    padding: 40px ${({ theme: { padding } }) => padding.md}px 24px;
  }

  h1 {
    ${({ theme: { typography } }) => typography.h1}
    padding-top: 12px;
    color: ${({ theme: { colors } }) => colors.text.highlight};
  }

  > div {
    ${({ theme: { typography } }) => typography.body4}
    color: ${({ theme: { colors } }) => colors.text.subdued};
  }

  ${({ dimmed = false }) =>
    dimmed &&
    css`
      h1 {
        ${dimmedStyle}
        margin-top: 8px;
        width: 100%;
      }

      > div {
        ${dimmedStyle}
        width: 74px;
      }
    `}
`;

const Wrapper = styled.section`
  padding: 55px ${({ theme: { padding } }) => padding.md}px 40px;
  background-color: ${({ theme: { colors } }) => colors.background.white};

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > button {
    margin: 0 auto;
  }

  ${media.mobile} {
    padding: 60px ${({ theme: { padding } }) => padding.md}px 40px;
  }
`;

const TilItem = styled.li<StyledProps>`
  ${({ theme: { typography } }) => typography.body2}

  position: relative;
  margin-bottom: 60px;
  padding: 24px 16px 16px;
  word-break: break-all;

  border-radius: 12px;
  background-color: ${({ theme: { colors } }) => colors.ui.inputField};
  color: ${({ theme: { colors } }) => colors.text.idle};

  > div {
    ${dimmedStyle}
  }

  ${({ dimmed = false }) =>
    dimmed &&
    css`
      display: flex;
      flex-direction: column;
      row-gap: 8px;
      padding: 16px 16px 21px;
    `}
`;

const Label = styled.span`
  position: absolute;
  top: 0;
  left: 24px;
  transform: translateY(-50%);
`;

export default ReadRecordPage;
