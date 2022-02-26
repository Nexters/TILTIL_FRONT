import { SHARE_OG_IMAGE } from 'constants/common';

import styled from '@emotion/styled';
import api, { setAuthorization } from 'apis/interceptor';
import { useFetchGreetingMessage, useFetchRecentTilLog, useFetchUserTilStatistics } from 'apis/opens';
import { useFetchMe } from 'apis/users';
import Button from 'components/Button';
import GuideIllust from 'components/GuideIllust';
import Head from 'components/Head';
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
  isShared: boolean;
  isCSR: boolean;
}

const UserPage = ({ isMobile, id, isShared, isCSR }: Props) => {
  const me = useFetchMe(isCSR);
  const isSharedLink = isCSR ? !me || me?.data.id !== Number(id) : isShared;

  const greeting = useFetchGreetingMessage(id, isSharedLink);
  const { data: recent, isLoading: isLoadingLog } = useFetchRecentTilLog(id);
  const statistics = useFetchUserTilStatistics(id);

  return (
    <PageWrapper background="default">
      <Head description="친구가 암묵지를 공유했어요! 구경하러 가볼까요?" image={SHARE_OG_IMAGE} />

      <Header rightButton={['share', 'user']} background="transparent" />
      <main>
        <GuideIllust greeting={greeting?.data} isMobile={isMobile} />
        <MontlyLog
          logs={recent?.data.tilLogs}
          total={recent?.data.sumOfTil}
          isMobile={isMobile}
          isLoading={isLoadingLog}
          hasRecordsViewButton={!isSharedLink}
        />
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

export async function getServerSideProps({ req, query }: GetServerSidePropsContext) {
  const isMobile = isMobileDetect(req);
  const queryClient = new QueryClient();
  const userId = Number(query.id);

  // skip data prefetching if CSR
  if (req.url?.startsWith('/_next')) {
    return {
      props: {
        isMobile,
        id: userId,
        isCSR: true,
      },
    };
  }

  // data prefetching if SSR
  await queryClient.prefetchQuery(userKeys.greeting(userId), async () => {
    const { data } = await api.open.getUserGreetingMessageUsingGet(userId);
    return data;
  });
  await queryClient.prefetchQuery(userKeys.recentLog(userId), async () => {
    const { data } = await api.open.getRecentTilLogsUsingGet(userId);
    return data;
  });
  await queryClient.prefetchQuery(userKeys.statistics(userId), async () => {
    const { data } = await api.open.getUserTilStatisticsUsingGet(userId);
    return data;
  });

  const props = {
    dehydratedState: dehydrate(queryClient),
    isMobile,
    id: userId,
    isCSR: false,
  };

  try {
    const { accessToken } = req.cookies;
    setAuthorization(accessToken);
    const { data } = await api.users.userUsingGet();
    return {
      props: {
        ...props,
        isShared: data.id !== userId,
      },
    };
  } catch (error) {
    return {
      props: {
        ...props,
        isShared: true,
      },
    };
  }
}

export default UserPage;
