import styled from '@emotion/styled';
import React, { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
}

const MAX_LENGTH = 8;

const Input: React.FC<Props> = ({ value, ...rest }) => {
  return (
    <Wrapper>
      <input type="text" value={value} {...rest} />
      <LengthCounter>{`${value?.length ?? 0} / ${MAX_LENGTH}`}</LengthCounter>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 56px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.input};
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 18px 16px;

  input {
    display: block;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.015em;
    background-color: ${({ theme }) => theme.colors.background.input};
    border: 0;
  }
`;

const LengthCounter = styled.span`
  color: ${({ theme }) => theme.colors.font.input};
  font-size: 14px;
  line-height: 24px;
  text-align: right;
  letter-spacing: -0.015em;
`;

export default Input;
