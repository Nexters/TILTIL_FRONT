import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  shape: 'square' | 'round';
  size: 'large' | 'medium' | 'small';
  fullWidth: boolean;
}

type Props = Partial<ButtonProps>;
type WrapperProps = Pick<ButtonProps, 'fullWidth' | 'shape' | 'size'>;

const Button: React.FC<Props> = React.forwardRef<HTMLButtonElement, Props>(
  ({ fullWidth = false, children, size = 'medium', type = 'button', shape = 'round', ...rest }, ref) => {
    return (
      <Wrapper ref={ref} type={type} shape={shape} size={size} fullWidth={fullWidth} {...rest}>
        {children}
      </Wrapper>
    );
  }
);

const Wrapper = styled.button<WrapperProps>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  padding: 12px;

  text-align: center;
  font-weight: bold;

  border-radius: ${({ shape }) => (shape === 'round' ? '12px' : '0px')};
  background-color: ${({ theme }) => theme.colors.primary.default};
  color: ${({ theme }) => theme.colors.text.inverse};

  ${({ size, theme }) => {
    switch (size) {
      default:
        return css`
          height: 56px;
          ${theme.typography.h5};
        `;
    }
  }};

  :hover {
    background-color: ${({ theme }) => theme.colors.primary.pressed};
  }

  :disabled {
    background-color: ${({ theme }) => theme.colors.ui.disabled};
  }
`;

Button.displayName = 'Button';

export default Button;
