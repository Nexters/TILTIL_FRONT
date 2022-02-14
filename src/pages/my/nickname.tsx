import styled from '@emotion/styled';
import Button from 'components/Button';
import Input from 'components/Input';
import Header from 'components/layout/Header';
// import { GetServerSidePropsContext } from 'next';
import React, { ChangeEvent, useState } from 'react';
import { PageWrapper } from 'styles/styled';

interface Props {
  id: string;
}

const NicknamePage: React.FC<Props> = () => {
  const [nickname, setNickname] = useState('데니스');

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleSubmit = () => {};

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

// export async function getServerSideProps({ query }: GetServerSidePropsContext<Pick<Props, 'id'>>) {
//   return {
//     props: {
//       id: query.id,
//     },
//   };
// }

export default NicknamePage;
