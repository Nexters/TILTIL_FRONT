import styled from '@emotion/styled';
import Button from 'components/Button';
import Input from 'components/Input';
import Header from 'components/layout/Header';
// import { GetServerSidePropsContext } from 'next';
import React, { ChangeEvent, useState } from 'react';

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
    <Wrapper>
      <Header leftButton="home" title="닉네임 변경" />
      <main>
        <Label className="mx-2">닉네임</Label>
        <div className="mt-1 mb-3">
          <Input value={nickname} onChange={handleNicknameChange} />
        </div>
        <Button onClick={handleSubmit}>변경</Button>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.white};
  width: 100%;

  main {
    display: flex;
    flex-direction: column;
    padding: 142px 24px 0px 24px;
  }
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
