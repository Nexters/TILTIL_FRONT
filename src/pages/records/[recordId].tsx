import ReadRecordPage from 'components/records/detail/ReadRecordPage';
import type { GetServerSidePropsContext } from 'next';
import React from 'react';

interface Props {
  recordId?: string;
}

const RecordPage = ({ recordId }: Props) => {
  return <ReadRecordPage />;
};

export async function getServerSideProps({ params }: GetServerSidePropsContext<Pick<Props, 'recordId'>>) {
  return {
    props: {
      recordId: params?.recordId,
    },
  };
}

export default RecordPage;
