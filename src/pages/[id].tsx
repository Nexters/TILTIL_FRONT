import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

interface Props {
  id?: string;
}

const Profile = ({ id }: Props) => {
  return <h1>PROFILE {id}</h1>;
};

export async function getServerSideProps({ query }: GetServerSidePropsContext<Pick<Props, 'id'>>) {
  return {
    props: {
      id: query.id,
    },
  };
}

export default Profile;
