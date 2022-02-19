import styled from '@emotion/styled';
import { Icon } from 'components/icon/Icon';
import Header from 'components/layout/Header';
import MontlyLog from 'components/MontlyLog';
import { Text } from 'components/Text';
import { GetServerSidePropsContext } from 'next';
import React from 'react';
import { PageWrapper } from 'styles/styled';
import theme from 'styles/theme';
import isMobileDetect from 'utils/isMobileDetect';
import media from 'utils/media';

interface Props {
  id?: string;
  isMobile: boolean;
}

const Profile = ({ id, isMobile }: Props) => {
  return (
    <PageWrapper background="default">
      <Header rightButton={['share', 'user']} />
      <main>
        <Wrapper>
          <GuideIllust>
            <Icon name={isMobile ? 'cloudWithMountainM' : 'cloudWithMountainD'} />
          </GuideIllust>
          <TextWrapper>
            <Text typography="h2" color={theme.colors.text.highlight}>
              최다예님
            </Text>
            <Text typography="h1" color={theme.colors.text.highlight}>
              오늘 배운 것을 기록해 볼까요?
            </Text>
          </TextWrapper>
        </Wrapper>
        <MontlyLog />
      </main>
    </PageWrapper>
  );
};

const Wrapper = styled.section`
  height: 306px;
  background-color: ${({ theme: { colors } }) => colors.background.white};

  ${media.mobile} {
    height: 254px;
  }
`;

const GuideIllust = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background: radial-gradient(43.7% 86.49% at 100% 100%, rgba(193, 225, 255, 0.3) 0%, rgba(193, 225, 255, 0) 100%),
    radial-gradient(74.61% 74.61% at 1.25% 100%, rgba(58, 161, 255, 0.3) 0%, rgba(58, 161, 255, 0) 100%);
  border-radius: 0px;
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const TextWrapper = styled.div`
  position: relative;
  top: -93px;
  padding: 0px 24px;
  display: flex;
  flex-direction: column;
`;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const isMobile = isMobileDetect(context.req);
  return {
    props: {
      isMobile,
    },
  };
}

export default Profile;
