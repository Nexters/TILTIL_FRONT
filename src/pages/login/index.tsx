import { Cancel } from 'assets';
import Header from 'components/layout/Header';
import React from 'react';
import { PageWrapper } from 'styles/styled';

const Login = () => {
  return (
    <PageWrapper>
      <Header
        leftBtn={<></>}
        rightBtn={
          <button type="button">
            <Cancel />
          </button>
        }
      />
      <main>LOGIN</main>
    </PageWrapper>
  );
};

export default Login;
