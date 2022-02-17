import styled from '@emotion/styled';
import { useFetchMe, useUpdateMe } from 'apis/users';
import Button from 'components/Button';
import Input from 'components/Input';
import Header from 'components/layout/Header';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { PageWrapper } from 'styles/styled';

const NicknamePage: React.FC = () => {
  const fetchedMe = useFetchMe();
  const [nickname, setNickname] = useState('');
  const updateMeMutation = useUpdateMe();

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleSubmit = () => {
    updateMeMutation.mutate(nickname, {
      onSuccess: () => {
        alert('닉네임 변경 성공 ');
      },
    });
  };

  useEffect(() => {
    setNickname(fetchedMe?.data.name ?? '');
  }, [fetchedMe]);

  return (
    <PageWrapper>
      <Header leftButton="home" title="닉네임 변경" />
      <Contents>
        <Label className="mx-2">닉네임</Label>
        <div className="mt-1 mb-3">
          <Input value={nickname} onChange={handleNicknameChange} />
        </div>
        <Button onClick={handleSubmit}>변경</Button>
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
