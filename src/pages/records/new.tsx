import { Form } from 'components/Form';
import Header from 'components/layout/Header';
import React from 'react';
import { PageWrapper } from 'styles/styled';

const NewRecord = () => {
  return (
    <PageWrapper>
      <Header title="암묵지 쌓기" />
      <Form />
    </PageWrapper>
  );
};

export default NewRecord;
