/* eslint-disable react/no-array-index-key */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Header from 'components/layout/Header';
import Tag from 'components/Tag';
import React from 'react';
import { Main, PageWrapper } from 'styles/styled';
import theme from 'styles/theme';
import media from 'utils/media';

interface StyleProps {
  dimmed?: boolean;
}

const ReadRecordPage = () => {
  const date = undefined;
  const isLoading = true;

  return (
    <PageWrapper background="default">
      <Header title="암묵지 읽기" leftButton="home" rightButton={['more']} background="default" />

      <ReadMain>
        <MainHeader dimmed>
          <div>{date}</div>
          <h1>{date}</h1>
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
                        // eslint-disable-next-line react/no-array-index-key
                        <div key={_index} />
                      ))}
                  </TilItem>
                ))
            ) : (
              <TilItem>
                <Label>
                  <Tag size="large" category="good" status="active" />
                </Label>
                관리자 리디자인을 하면서, 경영지원팀의 목소리를 듣고 리디자인에 반영 - 관리자 리디자인을 하면서 소매업체
                정보수정 댑스와 브레드크럼 경로에 대해 나의 직관보다는 실제 사용할 경영지원팀과 영업팀에게 먼저 어떤게
                편하냐고 A/B로 물어본 뒤 해당 부분은 반영했다.
              </TilItem>
            )}
          </ul>
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

const MainHeader = styled.header<StyleProps>`
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
        margin-top: 8px;
        ${dimmedStyle}
        width: 100%;
      }

      > div {
        ${dimmedStyle}
        width: 74px;
      }
    `}
`;

const Wrapper = styled.section`
  padding: 55px ${({ theme: { padding } }) => padding.md}px 0;
  background-color: ${({ theme: { colors } }) => colors.background.white};
  flex: 1;

  ${media.mobile} {
    padding: 60px ${({ theme: { padding } }) => padding.md}px 0;
  }
`;

const TilItem = styled.li<StyleProps>`
  ${({ theme: { typography } }) => typography.body2}

  position: relative;
  margin-bottom: 60px;
  padding: 24px 16px 16px;

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
