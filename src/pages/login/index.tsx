import { ROUTE } from 'constants/route';

import styled from '@emotion/styled';
import { setAuthorization } from 'apis/interceptor';
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

const GOOGLE_LOGIN_URL = 'https://api.bing-bong.today/oauth2/authorization/google';

interface Props {
  token: string;
  isMobile: boolean;
}

type TopAreaProp = { height: number };

const ICEBERG_MIN_SIZE = { WIDTH: 220, HEIGHT: 380 };
const MOBILE_MIN_WIDTH = 360;

const LoginPage = ({ token, isMobile }: Props) => {
  const router = useRouter();
  const [hasToken, setToken] = useState(!!token);
  const [ratio, setRatio] = useState(isMobile ? 1 : 1.5);

  const handleResize = () => {
    const criteria = visualViewport.width / MOBILE_MIN_WIDTH;
    const nextRatio = criteria > 1.5 ? 1.5 : criteria;
    setRatio(nextRatio);
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem('accessToken', token);
      setAuthorization(token);
      setToken(true);
      router.push(ROUTE.main);
    }

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
        <TopArea height={200 + ratio * 150}>
          <DescriptionWrapper className="mx-3">
            <span>요즘 잘나가는 사람들의</span>
            <span>회고 방법,</span>
            <span>BingBong</span>
          </DescriptionWrapper>
          <IcebergWrapper>
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
            <ButtonUpperText>3초만에 회고하러 가기</ButtonUpperText>
            <ButtonWrapper>
              <LoginButton fullWidth onClick={handleLogin}>
                <GoogleIcon />
                Google로 계속하기
              </LoginButton>
            </ButtonWrapper>
          </div>
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
  font-family: GmarketSansMedium;
  font-size: 24px;
  line-height: 38px;
  letter-spacing: -0.04em;

  span:nth-of-type(3) {
    font-family: GmarketSansBold;
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
`;

const BottomArea = styled.div`
  flex: 1 1;
  display: flex;
  align-items: flex-end;
  background-color: rgba(58, 161, 255, 0.33);
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
  ${({ theme }) => theme.typography.buttonL}
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
  ${({ theme }) => theme.typography.caption3}
  color: ${({ theme }) => theme.colors.text.normal};
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
