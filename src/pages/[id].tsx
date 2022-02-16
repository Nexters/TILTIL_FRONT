import styled from '@emotion/styled';
import CalandarGrapth from 'components/CalandarGrapth';
import Header from 'components/layout/Header';
import { Text } from 'components/Text';
import { GetServerSidePropsContext } from 'next';
import React from 'react';
import { PageWrapper } from 'styles/styled';
import theme from 'styles/theme';

interface Props {
  id?: string;
}

const Profile = ({ id }: Props) => {
  return (
    <PageWrapper background="default">
      <Header rightButton={['share', 'user']} />

      <main>
        <h1>PROFILE {id}</h1>

        <MontlyTils className="mt-5">
          <MontlyTitle className="mb-3 mb-half">
            <Count>
              <Text className="mr-1 ml-half" typography="body6">
                지금까지 모은 빙하 조각
              </Text>
              <Text typography="h5" color={theme.colors.text.highlight}>
                7 개
              </Text>
            </Count>
            <button type="button">리스트 보기</button>
          </MontlyTitle>
          <CalandarGrapth />
          <Note>
            <Text typography="caption1" color={theme.colors.text.placeholder}>
              2022.01.01 ~ 2022.02.01
            </Text>
          </Note>
        </MontlyTils>
      </main>
    </PageWrapper>
  );
};

const MontlyTils = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 48px;
`;

const MontlyTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const Count = styled.div`
  display: flex;
  align-items: center;
`;
const Note = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export async function getServerSideProps({ query }: GetServerSidePropsContext<Pick<Props, 'id'>>) {
  return {
    props: {
      id: query.id,
    },
  };
}

export default Profile;
