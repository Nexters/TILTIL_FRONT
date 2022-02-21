import styled from '@emotion/styled';
import api from 'apis/interceptor';
import { useFetchRecentTilLog, useFetchUserTilStatistics } from 'apis/opens';
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
  isMobile: boolean;
  id: number;
}

const MainPage = ({ isMobile, id }: Props) => {
  const me = useFetchMe();
  const data = useFetchRecentTilLog(id);
  const statistics = useFetchUserTilStatistics(id);

  return (
    <PageWrapper background="default">
      <Header rightButton={['share', 'user']} />
      <main>
        <GuideIllust name={me?.data.name} isMobile={isMobile} />
        <MontlyLog />
        <RecordStatistics statistics={statistics?.data} />
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const isMobile = isMobileDetect(context.req);
  const queryClient = new QueryClient();
  const userId = Number(context.query.id);
  await queryClient.prefetchQuery(userKeys.recentLog(userId), async () => {
    const { data } = await api.open.getRecentTilLogsUsingGet(userId);
    return data;
  });
  await queryClient.prefetchQuery(userKeys.statistics(userId), async () => {
    const { data } = await api.open.getUserTilStatisticsUsingGet(userId);
    return data;
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      isMobile,
      id: userId,
    },
  };
}

export default MainPage;
