// common component example
import styled from '@emotion/styled';
import React from 'react';

// name: Props
interface Props {
  text: string;
  num: number;
}

// Wrapper
// arrow function 사용
// function, method: return type 적어주기
const Button: React.VFC<Props> = ({ text }) => {
  return (
    <Wrapper type="button" text={text}>
      버튼
    </Wrapper>
  );
};

// styled components 위치
const Wrapper = styled.button<Pick<Props, 'text'>>`
  color: blue;
`;

export default Button;