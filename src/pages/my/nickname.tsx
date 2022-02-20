import { ROUTE } from 'constants/route';

import styled from '@emotion/styled';
import { useFetchMe, useUpdateUserMutation } from 'apis/users';
import Button from 'components/Button';
import Input from 'components/Input';
import Header from 'components/layout/Header';
import { useRouter } from 'next/router';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDialogStore } from 'states/dialogStore';
import { PageWrapper } from 'styles/styled';

const NicknamePage: React.FC = () => {
  const me = useFetchMe();
  const [nickname, setNickname] = useState('');
  const updateUserMutation = useUpdateUserMutation();
  const dialog = useDialogStore();
  const router = useRouter();

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleSubmit = () => {
    updateUserMutation.mutate(nickname, {
      onSuccess: () => {
        dialog.toast('닉네임을 변경했어요!');
        router.push(ROUTE.my);
      },
    });
  };

  useEffect(() => {
    setNickname(me?.data.name ?? '');
  }, [me]);

  return (
    <PageWrapper>
      <Header leftButton="home" title="닉네임 변경" me={me?.data} />
      <Contents>
        <Label className="mx-2">닉네임</Label>
        <div className="mt-1 mb-3">
          <Input value={nickname} onChange={handleNicknameChange} />
        </div>
        <Button disabled={!nickname || nickname === me?.data.name} onClick={handleSubmit}>
          변경
        </Button>
      </Contents>
    </PageWrapper>
  );
};

const Contents = styled.main`
  display: flex;
  flex-direction: column;
  padding: 142px 24px 0px 24px;
`;

const Label = styled.span`
  ${({ theme }) => theme.typography.body2}
  color: ${({ theme }) => theme.colors.text.subdued}
`;

export default NicknamePage;
