import styled from '@emotion/styled';
// import { GetServerSidePropsContext } from 'next';
import React from 'react';

interface Props {
  id: string;
}

const MENU_TITLES = ['닉네임 변경', '서비스 소개', '로그아웃'];

const MyPage: React.FC<Props> = () => {
  const userName = '데니스';

  return (
    <Wrapper>
      <UserNameWrapper>
        <span>{userName} 님!</span>
        <span>잊지 않고 오셨네요!</span>
      </UserNameWrapper>
      <MenuList>
        {MENU_TITLES.map((title) => (
          <li key={title}>
            {title}
            <span>{'>'}</span>
          </li>
        ))}
      </MenuList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 144px 24px 0px 24px;
`;

const UserNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.font.secondary};
  margin: 16px 0;

  span:nth-of-type(1) {
    font-weight: normal;
  }

  span:nth-of-type(2) {
    font-weight: bold;
  }
`;

const MenuList = styled.ul`
  margin: 16px 0;
  padding: 10px 8px;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.015em;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.font.normal};
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-radius: 12px;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    height: 56px;
    margin: 8px 0;
  }
`;

// export async function getServerSideProps({ query }: GetServerSidePropsContext<Pick<Props, 'id'>>) {
//   return {
//     props: {
//       id: query.id,
//     },
//   };
// }

export default MyPage;
