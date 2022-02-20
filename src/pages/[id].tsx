import styled from '@emotion/styled';
import api from 'apis/interceptor';
import { useFetchRecentTilLog } from 'apis/opens';
import { useFetchMe } from 'apis/users';
import Button from 'components/Button';
import GuideIllust from 'components/GuideIllust';
import Header from 'components/layout/Header';
import MontlyLog from 'components/MontlyLog';
import RecordStatistics from 'components/RecordStatistics';
import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import { userKeys } from 'queryKeys/userKeys';
import React from 'react';
import { dehydrate, QueryClient } from 'react-query';
import { PageWrapper } from 'styles/styled';
import isMobileDetect from 'utils/isMobileDetect';

interface Props {
  id: string;
  isMobile: boolean;
}

const Profile = ({ isMobile, id }: Props) => {
  const me = useFetchMe();
  const { data } = useFetchRecentTilLog(id);

  return (
    <PageWrapper background="default">
      <Header rightButton={['share', 'user']} />
      <main>
        <GuideIllust name={me?.data.name} isMobile={isMobile} />
        <MontlyLog />
        <RecordStatistics />
        <ButtonWrapper>
          <Link href="/records/new" passHref>
            <Button fullWidth>오늘도 암묵지 키우기</Button>
          </Link>
        </ButtonWrapper>
      </main>
    </PageWrapper>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  margin: 0 24px 24px 24px;
`;

export async function getServerSideProps(context: GetServerSidePropsContext<Pick<Props, 'id'>>) {
  const isMobile = isMobileDetect(context.req);
  const queryCache = new QueryClient();
  const { id } = context.query;
  await queryCache.prefetchQuery(userKeys.recentLog(`${id}`), () => api.open.getRecentTilLogsUsingGet(`${id}`));

  return {
    props: {
      dehydratedState: dehydrate(queryCache),
      isMobile,
      id,
    },
  };
}

export default Profile;
