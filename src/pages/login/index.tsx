import { ROUTE } from 'constants/route';

import styled from '@emotion/styled';
import { setAuthorization } from 'apis/interceptor';
import icebergAnimation from 'assets/lotties/iceUpDown.json';
import GoogleIcon from 'assets/svgs/GoogleIcon';
import Button from 'components/Button';
import { Icon } from 'components/icon/Icon';
import Header from 'components/layout/Header';
import { Text } from 'components/Text';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import { PageWrapper } from 'styles/styled';
import theme from 'styles/theme';

const GOOGLE_LOGIN_URL = 'https://api.bing-bong.today/oauth2/authorization/google';

interface Props {
  token: string;
}

type TopAreaProp = { height: number };
type DescriptionWrapperProps = { isMobile: boolean };

const ICEBERG_MIN_SIZE = { WIDTH: 220, HEIGHT: 380 };
const MOBILE_MIN_WIDTH = 360;

const LoginPage = ({ token }: Props) => {
  const router = useRouter();
  const [hasToken, setToken] = useState(!!token);
  const [isMobile, setMobile] = useState(visualViewport.width < theme.size.mobile);
  const [ratio, setRatio] = useState(isMobile ? 1 : 1.5);

  const handleResize = () => {
    const criteria = visualViewport.width / MOBILE_MIN_WIDTH;
    const nextRatio = criteria > 1.5 ? 1.5 : criteria;
    setRatio(nextRatio);
    setMobile(visualViewport.width < theme.size.mobile);
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem('accessToken', token);
      setAuthorization(token);
      setToken(true);
      router.push(ROUTE.main_login);
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
          <DescriptionWrapper isMobile={isMobile} className="mx-3">
            <span>요즘 잘나가는 사람들의 회고 방법,</span>
            <Icon name="logo" />
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
            <ButtonUpperText typography="caption3">빠르게 성장하러 가기</ButtonUpperText>
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

const DescriptionWrapper = styled.div<DescriptionWrapperProps>`
  display: flex;
  flex-direction: column;
  margin-top: 71px;
  ${theme.typography.h2}
  align-items: ${({ isMobile }) => (isMobile ? 'felx-start' : 'center')};
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
  ${theme.typography.buttonL}
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

export async function getServerSideProps({ query }: GetServerSidePropsContext<Pick<Props, 'token'>>) {
  return {
    props: {
      token: query.token ?? '',
    },
  };
}

export default LoginPage;
