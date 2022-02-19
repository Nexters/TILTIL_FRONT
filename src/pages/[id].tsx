import api from 'apis/interceptor';
import { useFetchRecentTilLog } from 'apis/opens';
import { useFetchMe } from 'apis/users';
import GuideIllust from 'components/GuideIllust';
import Header from 'components/layout/Header';
import MontlyLog from 'components/MontlyLog';
import { GetServerSidePropsContext } from 'next';
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
        <GuideIllust name={me?.data.name} isMobile={isMobile} />
        <MontlyLog total={data?.data.sumOfTil} logs={data?.data.tilLogs} />
      </main>
    </PageWrapper>
  );
};

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
