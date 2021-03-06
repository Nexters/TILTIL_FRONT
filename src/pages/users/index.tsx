import { ROUTE } from 'constants/route';

import api, { setAuthorization } from 'apis/interceptor';
import { GetServerSidePropsContext } from 'next';
import React from 'react';

const UsersPage = () => {
  return <></>;
};

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  try {
    const { accessToken } = req.cookies;
    setAuthorization(accessToken);
    const { data } = await api.users.userUsingGet();
    return {
      redirect: {
        permanent: false,
        destination: `${ROUTE.users}/${data.id}`,
      },
    };
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: ROUTE.login,
      },
    };
  }
}

export default UsersPage;
