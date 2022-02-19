import GuideIllust from 'components/GuideIllust';
import Header from 'components/layout/Header';
import MontlyLog from 'components/MontlyLog';
import { GetServerSidePropsContext } from 'next';
import React from 'react';
import { PageWrapper } from 'styles/styled';
import isMobileDetect from 'utils/isMobileDetect';

interface Props {
  id?: string;
  isMobile: boolean;
}

const Profile = ({ id, isMobile }: Props) => {
  return (
    <PageWrapper background="default">
      <Header rightButton={['share', 'user']} />
      <main>
        <GuideIllust isMobile={isMobile} />
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
