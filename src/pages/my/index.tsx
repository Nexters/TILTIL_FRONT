import styled from '@emotion/styled';
import Header from 'components/layout/Header';
import { useRouter } from 'next/router';
// import { GetServerSidePropsContext } from 'next';
import React, { MouseEvent, useMemo } from 'react';

interface Props {
  id: string;
}

interface MenuItem {
  title: string;
  onClick?: (e?: MouseEvent<HTMLLIElement>) => void;
}

const MyPage: React.FC<Props> = () => {
  const nickname = '데니스';
  const router = useRouter();

  const menuItems = useMemo<MenuItem[]>(
    () => [
      {
        title: '닉네임변경',
        onClick: () => router.push(`${router.pathname}/nickname`),
      },
      { title: '서비스 소개', onClick: () => {} },
      { title: '로그아웃', onClick: () => {} },
    ],
    []
  );

  return (
    <Wrapper>
      <Header leftButton="home" />
      <main>
        <UserNameWrapper className="my-2">
          <span>{nickname} 님!</span>
          <span>잊지 않고 오셨네요!</span>
        </UserNameWrapper>
        <MenuList className="my-2">
          {menuItems.map(({ title, onClick }) => (
            <li className="px-2 my-1" key={title} onClick={onClick}>
              {title}
              <span>{'>'}</span>
            </li>
          ))}
        </MenuList>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background.white};

  main {
    display: flex;
    flex-direction: column;
    padding: 98px 24px 0px 24px;
  }
`;

const UserNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.text.highlight};

  span:nth-of-type(1) {
    ${({ theme }) => theme.typography.h4};
  }

  span:nth-of-type(2) {
    ${({ theme }) => theme.typography.h3};
  }
`;

const MenuList = styled.ul`
  padding: 10px 8px;
  ${({ theme }) => theme.typography.body2};
  background-color: ${({ theme }) => theme.colors.background.default};
  border-radius: 12px;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 56px;
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
