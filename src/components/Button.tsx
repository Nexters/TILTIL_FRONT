import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  shape?: 'square' | 'round';
  size?: 'large' | 'medium' | 'small';
  fullWidth?: boolean;
}

const Button: React.FC<Props> = ({ children, size = 'medium', type = 'button', shape = 'round', ...rest }) => {
  return (
    <Wrapper type={type} shape={shape} size={size} {...rest}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.button<Props>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  padding: 12px;

  text-align: center;
  font-weight: bold;

  border-radius: ${({ shape }) => (shape === 'round' ? '12px' : '0px')};
  background-color: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.font.white};

  ${({ size, theme }) => {
    switch (size) {
      default:
        return css`
          height: 56px;
          ${theme.fontSize.h5};
        `;
    }
  }};

  :hover {
    background-color: ${({ theme }) => theme.colors.background.hover};
  }

  :disabled {
    background-color: ${({ theme }) => theme.colors.background.disabled};
  }
`;

export default Button;
