import { readTil } from 'apis/til';
import ReadRecordPage from 'components/records/detail/ReadRecordPage';
import { useRouter } from 'next/router';
import React from 'react';

type RecordType = 'read' | 'modify';

const RecordPage = () => {
  const router = useRouter();

  const recordId = Number(router.query?.recordId);
  const type = router.query?.type as RecordType;

  const { data: tilDetail, isLoading, isError } = readTil(recordId);

  // TODO: 서버 되고 디자인 코멘트 받으면 에러 처리
  if (isError) {
    // 404 redirect
    // 403
    return <>에러</>;
  }

  if (type === 'modify') {
    return <>글 수정 컴포넌트</>;
  }

  // type === 'read'
  return <ReadRecordPage isLoading={isLoading} {...tilDetail?.data} />;
};

export default RecordPage;
