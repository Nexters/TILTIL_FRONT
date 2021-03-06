import { ROUTE } from 'constants/route';

import styled from '@emotion/styled';
import icebergAnimation from 'assets/lotties/iceUpDown.json';
import GoogleIcon from 'assets/svgs/GoogleIcon';
import Button from 'components/Button';
import Head from 'components/Head';
import { Icon } from 'components/icon/Icon';
import Header from 'components/layout/Header';
import { Text } from 'components/Text';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import { PageWrapper } from 'styles/styled';
import theme from 'styles/theme';
import isMobileDetect from 'utils/isMobileDetect';

const GOOGLE_LOGIN_URL = 'https://api.bing-bong.today/oauth2/authorization/google';

interface Props {
  isMobileAgent: boolean;
}

type TopAreaProp = { height: number };
type DescriptionWrapperProps = { isMobile: boolean };

const ICEBERG_MIN_SIZE = { WIDTH: 220, HEIGHT: 380 };
const MOBILE_MIN_WIDTH = 360;

const LoginPage: React.VFC<Props> = ({ isMobileAgent }) => {
  const router = useRouter();
  const [isMobile, setMobile] = useState(isMobileAgent);
  const [ratio, setRatio] = useState(isMobile ? 1 : 1.5);

  const handleResize = () => {
    const criteria = visualViewport.width / MOBILE_MIN_WIDTH;
    const nextRatio = criteria > 1.5 ? 1.5 : criteria;
    setRatio(nextRatio);
    setMobile(visualViewport.width < theme.size.mobile);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogin = () => {
    router.push(`${GOOGLE_LOGIN_URL}?redirect_uri=${window.location.origin}/login`);
  };

  return (
    <RelativePageWrapper>
      <Head subTitle="로그인" />

      <Header rightButton={['cancel']} />
      <TopArea height={245 + ratio * 150}>
        <DescriptionWrapper isMobile={isMobile} className="mx-3">
          <span>요즘 잘나가는 사람들의 회고 방법,</span>
          <Icon name="logo" />
        </DescriptionWrapper>
        <IcebergWrapper className="mt-6">
          <LottieWrapper>
            <Lottie
              style={{ margin: '0 14px' }}
              width={ICEBERG_MIN_SIZE.WIDTH * ratio}
              height={ICEBERG_MIN_SIZE.HEIGHT * ratio}
              options={{
                loop: true,
                autoplay: true,
                animationData: icebergAnimation,
              }}
            />
          </LottieWrapper>
        </IcebergWrapper>
      </TopArea>
      <BottomArea>
        <div>
          <ButtonUpperText typography="caption3">빠르게 성장하러 가기</ButtonUpperText>
          <ButtonWrapper>
            <LoginButton size="large" fullWidth onClick={handleLogin}>
              <GoogleIcon />
              Google로 계속하기
            </LoginButton>
          </ButtonWrapper>
        </div>
      </BottomArea>
    </RelativePageWrapper>
  );
};

const RelativePageWrapper = styled(PageWrapper)`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
`;

const DescriptionWrapper = styled.div<DescriptionWrapperProps>`
  display: flex;
  flex-direction: column;
  margin-top: 71px;
  ${theme.typography.h2}
  align-items: ${({ isMobile }) => (isMobile ? 'flex-start' : 'center')};
  span {
    width: ${({ isMobile }) => (isMobile ? '240px' : '350px')};
  }
`;

const LottieWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const IcebergWrapper = styled.div`
  position: absolute;
  width: 100%;
`;

const TopArea = styled.div<TopAreaProp>`
  height: ${({ height }) => height}px;
  position: relative;
  flex-direction: column;
  background: radial-gradient(54.92% 69.85% at 100% 100%, rgba(193, 225, 255, 0.3) 0%, rgba(193, 225, 255, 0) 100%),
    radial-gradient(78.3% 72.56% at 21.07% 100%, rgba(58, 161, 255, 0.2) 0%, rgba(58, 161, 255, 0) 100%);
`;

const BottomArea = styled.div`
  flex: 1 1;
  display: flex;
  align-items: flex-end;
  background: linear-gradient(180deg, rgba(129, 194, 255, 0.33) 0%, rgba(7, 136, 255, 0.65) 100%);
  z-index: 1;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const LoginButton = styled(Button)`
  justify-content: center;
  align-items: center;
  svg {
    margin-right: 26px;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  padding: 0 18px 18px 18px;
`;

const ButtonUpperText = styled(Text)`
  justify-content: center;
  color: ${theme.colors.text.normal};
`;

export async function getServerSideProps({ req, res, query }: GetServerSidePropsContext) {
  const accessToken = (query.token as string) ?? '';
  if (accessToken) {
    res.setHeader('Set-Cookie', `accessToken=${accessToken}; path=/; max-age=3600*24`);
    return {
      redirect: {
        permanent: false,
        destination: ROUTE.users,
      },
    };
  }

  return {
    props: {
      isMobileAgent: isMobileDetect(req),
    },
  };
}

export default LoginPage;
