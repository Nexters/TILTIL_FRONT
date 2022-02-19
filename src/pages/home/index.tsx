import { useFetchMe } from 'apis/users';
import GuideIllust from 'components/GuideIllust';
import Header from 'components/layout/Header';
import MontlyLog from 'components/MontlyLog';
import { GetServerSidePropsContext } from 'next';
import React from 'react';
import { PageWrapper } from 'styles/styled';
import isMobileDetect from 'utils/isMobileDetect';

interface Props {
  isMobile: boolean;
}

const Profile = ({ isMobile }: Props) => {
  const me = useFetchMe();

  return (
    <PageWrapper background="default">
      <Header rightButton={['share', 'user']} />
      <main>
        <GuideIllust name={me?.data.name} isMobile={isMobile} />
        <MontlyLog />
      </main>
    </PageWrapper>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const isMobile = isMobileDetect(context.req);
  return {
    props: {
      isMobile,
    },
  };
}

export default Profile;
