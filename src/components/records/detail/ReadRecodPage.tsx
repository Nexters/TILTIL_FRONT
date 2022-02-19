import styled from '@emotion/styled';
import Header from 'components/layout/Header';
import Tag from 'components/Tag';
import React from 'react';
import { Main, PageWrapper } from 'styles/styled';

const ReadRecordPage = () => {
  return (
    <PageWrapper background="default">
      <Header title="암묵지 읽기" leftButton="home" rightButton={['more']} background="default" />

      <ReadMain>
        <MainHeader>
          <Date>2022.01.29</Date>
          <Title>1월 29일의 회고</Title>
        </MainHeader>

        <Wrapper>
          <ul>
            <TilItem>
              <Label>
                <Tag category="learn" status="active" />
              </Label>
              앱스트랙 공유 링크에 이미지가 보이지 않을 경우, 용량 문제일 수 있으니 슬라이스를 나눠서 올리기
            </TilItem>
            <TilItem>
              <Label>
                <Tag category="good" status="active" />
              </Label>
              관리자 리디자인을 하면서, 경영지원팀의 목소리를 듣고 리디자인에 반영 - 관리자 리디자인을 하면서 소매업체
              정보수정 댑스와 브레드크럼 경로에 대해 나의 직관보다는 실제 사용할 경영지원팀과 영업팀에게 먼저 어떤게
              편하냐고 A/B로 물어본 뒤 해당 부분은 반영했다.
            </TilItem>
            <TilItem>
              <Label>
                <Tag category="improve" status="active" />
              </Label>
              디자인 전에 모든 기능과 정책은 더블 체크하고, 내가 이해하고 있는 것이 맞는지 오버 커뮤니케이션을 하더라도
              확실하게 알고 디자인하자. 안그러면 개발 후에 수정해야하는 불상사가 날 수도 있다.
            </TilItem>
            <TilItem>
              <Label>
                <Tag category="curious" status="active" />
              </Label>
              디자인 전에 모든 기능과 정책은 더블 체크하고, 내가 이해하고 있는 것이 맞는지 오버 커뮤니케이션을 하더라도
              확실하게 알고 디자인하자. 안그러면 개발 후에 수정해야하는 불상사가 날 수도 있다.
            </TilItem>
          </ul>
        </Wrapper>
      </ReadMain>
    </PageWrapper>
  );
};

const ReadMain = styled(Main)`
  display: flex;
  flex-direction: column;
`;

const MainHeader = styled.header`
  padding: 40px ${({ theme: { padding } }) => padding.md}px 19px;
`;

const Date = styled.div`
  ${({ theme: { typography } }) => typography.body4}
  color: ${({ theme: { colors } }) => colors.text.subdued};
`;

const Title = styled.h2`
  ${({ theme: { typography } }) => typography.h1}
  padding-top: 12px;
  color: ${({ theme: { colors } }) => colors.text.highlight};
`;

const Wrapper = styled.section`
  padding: 40px ${({ theme: { padding } }) => padding.md}px 0;
  background-color: ${({ theme: { colors } }) => colors.background.white};
  flex: 1;
`;

const TilItem = styled.li`
  ${({ theme: { typography } }) => typography.body2}

  position: relative;
  margin-bottom: 60px;
  padding: 24px 16px 16px;

  border-radius: 12px;
  background-color: ${({ theme: { colors } }) => colors.ui.inputField};
  color: ${({ theme: { colors } }) => colors.text.idle};
`;

const Label = styled.span`
  position: absolute;
  top: 0;
  left: 24px;
  transform: translateY(-50%);
`;

export default ReadRecordPage;
