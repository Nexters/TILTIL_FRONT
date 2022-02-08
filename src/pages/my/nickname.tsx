import styled from '@emotion/styled';
import Button from 'components/Button';
import Input from 'components/Input';
// import { GetServerSidePropsContext } from 'next';
import React, { ChangeEvent, useState } from 'react';

interface Props {
  id: string;
}

const NicknamePage: React.FC<Props> = () => {
  const [userName, setUserName] = useState('데니스');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  return (
    <Wrapper>
      <Label>닉네임</Label>
      <InputWrapper>
        <Input value={userName} onChange={handleChange} />
      </InputWrapper>
      <Button>변경</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 142px 24px 0px 24px;
`;

const Label = styled.span`
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.015em;
  margin: 0 16px;
  color: ${({ theme }) => theme.colors.font.label};
`;

const InputWrapper = styled.div`
  margin-top: 8px;
  margin-bottom: 24px;
`;

// export async function getServerSideProps({ query }: GetServerSidePropsContext<Pick<Props, 'id'>>) {
//   return {
//     props: {
//       id: query.id,
//     },
//   };
// }

export default NicknamePage;
