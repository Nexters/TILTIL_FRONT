import { TilRequest } from 'apis/api';
import { readTil, useTilEditMutation } from 'apis/til';
import { Form } from 'components/Form';
import Header from 'components/layout/Header';
import ReadRecordPage from 'components/records/detail/ReadRecordPage';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState, VFC } from 'react';
import { PageWrapper } from 'styles/styled';

type RecordType = 'read' | 'modify';

interface Props {
  recordId: number;
}

const RecordPage: VFC<Props> = ({ recordId: id }) => {
  const router = useRouter();
  const { mutateAsync: editTil } = useTilEditMutation();

  const recordId = Number(router.query?.recordId || id);
  const type = router.query?.type as RecordType;

  const { data: tilDetail, isLoading, isError, refetch } = readTil(recordId);

  // TODO: 서버 되고 디자인 코멘트 받으면 에러 처리
  if (isError) {
    // 404 redirect
    // 403
    return <>에러</>;
  }

  if (type === 'modify' && !isLoading) {
    return (
      <PageWrapper>
        <Header title="암묵지 쌓기" />
        <Form
          tilDetailResponse={tilDetail?.data}
          onSubmit={async (tilRequest: TilRequest) => {
            await editTil({ id: recordId, tilRequest });
            refetch();

            router.replace(`/records/${recordId}`);
          }}
        />
      </PageWrapper>
    );
  }

  // type === 'read'
  return <ReadRecordPage isLoading={isLoading} {...tilDetail?.data} />;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const recordId = context.query.id?.toString() ?? '';

  return {
    props: {
      recordId,
    },
  };
}

export default RecordPage;
