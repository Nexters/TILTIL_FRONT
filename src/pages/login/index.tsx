import { ROUTE } from 'constants/route';

import styled from '@emotion/styled';
import icebergAnimation from 'assets/lotties/iceUpDown.json';
import GoogleIcon from 'assets/svgs/GoogleIcon';
import Button from 'components/Button';
import Header from 'components/layout/Header';
import { Text } from 'components/Text';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import { PageWrapper } from 'styles/styled';
import isMobileDetect from 'utils/isMobileDetect';

const GOOGLE_LOGIN_URL = 'http://api.bing-bong.today/oauth2/authorization/google';

interface Props {
  token: string;
  isMobile: boolean;
}

type TopAreaProp = { height: number };

const ICEBERG_MIN_SIZE = { WIDTH: 170, HEIGHT: 246 };
const MOBILE_MIN_WIDTH = 360;

const LoginPage = ({ token, isMobile }: Props) => {
  const router = useRouter();
  const [hasToken, setToken] = useState(false);
  const [ratio, setRatio] = useState(isMobile ? 1 : 2);

  const handleResize = () => {
    const criteria = visualViewport.width / MOBILE_MIN_WIDTH;
    const nextRatio = criteria > 2 ? 2 : criteria;
    setRatio(nextRatio);
  };

  useEffect(() => {
    const isStoredToken = !!localStorage.getItem('accessToken');
    setToken(!!token || isStoredToken);

    if (token) {
      localStorage.setItem('accessToken', token);
      router.push(ROUTE.main);
    } else if (isStoredToken) {
      router.push(ROUTE.main);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogin = () => {
    router.push(`${GOOGLE_LOGIN_URL}?redirect_uri=${window.location.origin}/login`);
  };

  return (
    !hasToken && (
      <RelativePageWrapper>
        <Header rightButton={['cancel']} />
        <TopArea height={200 + ratio * 100}>
          <DescriptionWrapper className="mx-3">
            <Text typography="h2">요즘 잘나가는 사람들의</Text>
            <Text typography="h2">회고 방법,</Text>
            <Text typography="h1">BingBong</Text>
          </DescriptionWrapper>
          <IcebergWrapper>
            <LottieWrapper>
              <Lottie
                style={{ margin: '0 28px' }}
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
          <ButtonWrapper>
            <LoginButton fullWidth onClick={handleLogin}>
              <GoogleIcon />
              Google로 계속하기
            </LoginButton>
          </ButtonWrapper>
        </BottomArea>
      </RelativePageWrapper>
    )
  );
};

const RelativePageWrapper = styled(PageWrapper)`
  display: flex;
  flex-direction: column;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 71px;
  height: 116px;
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
`;

const BottomArea = styled.div`
  flex: 1 1;
  display: flex;
  align-items: flex-end;
  background-color: rgba(58, 161, 255, 0.33);
`;

const LoginButton = styled(Button)`
  justify-content: center;
  align-items: center;
  svg {
    margin: 0 26px;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  padding: 18px;
`;

export async function getServerSideProps({ query, req }: GetServerSidePropsContext<Pick<Props, 'token'>>) {
  return {
    props: {
      token: query.token ?? '',
      isMobile: isMobileDetect(req),
    },
  };
}

export default LoginPage;
