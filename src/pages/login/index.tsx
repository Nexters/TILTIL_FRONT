import { Cancel } from 'assets';
import Header from 'components/layout/Header';
import React from 'react';
import { PageWrapper } from 'styles/styled';

const Login = () => {
  return (
    <PageWrapper>
      <Header rightButton="cancel" />
      <main>LOGIN</main>
    </PageWrapper>
  );
};

export default Login;
