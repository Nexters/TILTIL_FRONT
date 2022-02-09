import styled from '@emotion/styled';
import { Share, User } from 'assets';
import Header from 'components/layout/Header';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import React from 'react';
import { PageWrapper } from 'styles/styled';

interface Props {
  id?: string;
}

const Profile = ({ id }: Props) => {
  return (
    <PageWrapper>
      <Header rightButton="user" />

      <main>
        <h1>PROFILE {id}</h1>
      </main>
    </PageWrapper>
  );
};

export async function getServerSideProps({ query }: GetServerSidePropsContext<Pick<Props, 'id'>>) {
  return {
    props: {
      id: query.id,
    },
  };
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 18px;
`;

export default Profile;
