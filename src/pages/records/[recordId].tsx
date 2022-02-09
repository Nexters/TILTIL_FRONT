import Header from 'components/layout/Header';
import type { GetServerSidePropsContext } from 'next';
import React from 'react';
import { PageWrapper } from 'styles/styled';

interface Props {
  recordId?: string;
}

const Record = ({ recordId }: Props) => {
  return (
    <PageWrapper background="default">
      <Header title="암묵지 읽기" leftButton="home" rightButton={['more']} background="default" />

      <main>
        <h1>Record {recordId}</h1>
      </main>
    </PageWrapper>
  );
};

export async function getServerSideProps({ params }: GetServerSidePropsContext<Pick<Props, 'recordId'>>) {
  return {
    props: {
      recordId: params?.recordId,
    },
  };
}

export default Record;
