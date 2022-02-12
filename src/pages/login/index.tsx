import { ROUTE } from 'constants/route';

import styled from '@emotion/styled';
import icebergAnimation from 'assets/lotties/iceUpDown.json';
import GoogleIcon from 'assets/svgs/GoogleIcon';
import Button from 'components/Button';
import Header from 'components/layout/Header';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import { PageWrapper } from 'styles/styled';

const GOOGLE_LOGIN_URL = 'http://api.bing-bong.today/oauth2/authorization/google';

interface Props {
  token: string;
}

const LoginPage = ({ token }: Props) => {
  const router = useRouter();
  const [hasToken, setToken] = useState(false);

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

  const handleLogin = () => {
    router.push(`${GOOGLE_LOGIN_URL}?redirect_uri=${window.location.origin}/login`);
  };

  return (
    !hasToken && (
      <PageWrapper>
        <Header rightButton={['cancel']} />
        <DescriptionWrapper className="mx-3">
          <span>요즘 잘나가는 사람들의</span>
          <span>회고 방법,</span>
          <span>BingBong</span>
        </DescriptionWrapper>
        <IcebergWrapper>
          <LottieWrapper>
            <Lottie
              style={{ margin: '0 28px' }}
              width={170}
              height={246}
              options={{
                loop: true,
                autoplay: true,
                animationData: icebergAnimation,
              }}
            />
          </LottieWrapper>
        </IcebergWrapper>

        <BottomSurface>
          <ButtonWrapper>
            <LoginButton fullWidth onClick={handleLogin}>
              <GoogleIcon />
              Google로 계속하기
            </LoginButton>
          </ButtonWrapper>
        </BottomSurface>
      </PageWrapper>
    )
  );
};

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.typography.h2}
  line-height: 38px;
  letter-spacing: -0.04em;
  padding: 70px 0;

  span:nth-of-type(3) {
    font-weight: bold;
  }
`;

const LottieWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const IcebergWrapper = styled.div`
  position: absolute;
`;

const BottomSurface = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 0 auto;
  margin-top: 100px;
  background-color: ${({ theme }) => theme.colors.primary.light};
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

export async function getServerSideProps({ query }: GetServerSidePropsContext<Pick<Props, 'token'>>) {
  return {
    props: {
      token: query.token ?? '',
    },
  };
}

export default LoginPage;
