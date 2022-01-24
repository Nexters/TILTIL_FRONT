import type { GetServerSidePropsContext } from 'next';
import React from 'react';

interface Props {
  recordId?: string;
}

const Record = ({ recordId }: Props) => {
  return <h1>Record {recordId}</h1>;
};

export async function getServerSideProps({ params }: GetServerSidePropsContext<Pick<Props, 'recordId'>>) {
  return {
    props: {
      recordId: params?.recordId,
    },
  };
}

export default Record;
