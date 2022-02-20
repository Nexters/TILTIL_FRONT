import { ROUTE } from 'constants/route';

import styled from '@emotion/styled';
import { useFetchMe } from 'apis/users';
import { DialogConfirm } from 'components/dialog/DialogConfirm';
import Header from 'components/layout/Header';
import { useRouter } from 'next/router';
import React, { MouseEvent, useMemo } from 'react';
import { useDialogStore } from 'states/dialogStore';
import { PageWrapper } from 'styles/styled';

interface MenuItem {
  title: string;
  onClick?: (e?: MouseEvent<HTMLLIElement>) => void;
}

const MyPage: React.FC = () => {
  const router = useRouter();
  const me = useFetchMe();
  const dialog = useDialogStore();

  const handleLogout = async () => {
    document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    router.push(ROUTE.login);
  };

  const menuItems = useMemo<MenuItem[]>(
    () => [
      {
        title: '닉네임변경',
        onClick: () => router.push(ROUTE.myNickname),
      },
      { title: '서비스 소개', onClick: () => router.push(ROUTE.landing) },
      {
        title: '로그아웃',
        onClick: () => {
          dialog.open(
            <DialogConfirm
              title="우리 다시 만나요 :)"
              description={`아래의 계정으로 다시 로그인할 수 있습니다. ${me?.data.email}`}
              confirmLabel="로그아웃"
              onConfirm={handleLogout}
            />
          );
        },
      },
    ],
    [me]
  );

  return (
    <PageWrapper>
      <Header leftButton="home" />
      <Contents>
        <UserNameWrapper className="my-2">
          <span>{me?.data.name} 님!</span>
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
      </Contents>
    </PageWrapper>
  );
};

const Contents = styled.main`
  display: flex;
  flex-direction: column;
  padding: 98px 24px 0px 24px;
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
    cursor: pointer;
    justify-content: space-between;
    height: 56px;
  }
`;

export default MyPage;
