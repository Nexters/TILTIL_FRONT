import Header from 'components/layout/Header';
import React from 'react';
import { PageWrapper } from 'styles/styled';

const Records = () => {
  return (
    <PageWrapper background="default">
      <Header title="나의 암묵지" leftButton="home" background="default" />
      <main>Records</main>
    </PageWrapper>
  );
};

export default Records;
