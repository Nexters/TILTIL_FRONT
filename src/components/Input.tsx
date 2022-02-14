import styled from '@emotion/styled';
import React, { InputHTMLAttributes } from 'react';
import colors from 'styles/colors';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  background: keyof typeof colors.background;
  value: string;
}

type Props = Partial<InputProps>;
type WrapperProps = Pick<InputProps, 'background'>;

const Input: React.FC<Props> = ({ background = 'default', value, maxLength = 8, ...rest }) => {
  return (
    <Wrapper background={background}>
      <input type="text" value={value} maxLength={maxLength} {...rest} />
      <LengthWrapper>{`${value?.length ?? 0} / ${maxLength}`}</LengthWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  height: 56px;
  background-color: ${({ theme, background: key }) => theme.colors.background[key]};
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 18px 16px;

  input {
    display: block;
    background-color: inherit;
    border: 0;
    ${({ theme }) => theme.typography.body2};
    color: ${({ theme }) => theme.colors.text.idle};
  }
`;

const LengthWrapper = styled.span`
  color: ${({ theme }) => theme.colors.text.placeholder};
  ${({ theme }) => theme.typography.body4};
  text-align: right;
`;

export default Input;
