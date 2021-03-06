import { CATEGORY_TEXT } from 'constants/common';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ButtonHTMLAttributes } from 'react';
import colors, { CategoryStatus } from 'styles/colors';

import { buttonSmallStyle } from './ButtonSmall';

export interface CategoryThemeProps {
  category: keyof typeof colors.category;
  status: CategoryStatus;
}

interface TagButtonProps extends CategoryThemeProps, ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'large' | 'small';
}

const TagButton: React.FC<TagButtonProps> = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{CATEGORY_TEXT[rest.category]}</Wrapper>;
};

const Wrapper = styled.button<TagButtonProps>`
  ${buttonSmallStyle}
  width: ${({ size }) => (size === 'large' ? 'min(168px, 100%)' : '72px')};
  height: ${({ size }) => (size === 'large' ? 42 : 32)}px;

  ${({ theme: { typography } }) => typography.buttonS}
  ${({ theme, category, status, disabled }) => {
    if (disabled)
      return css`
        background-color: ${theme.colors.ui.subdued};
        color: ${theme.colors.text.placeholder};
      `;

    return css`
      background-color: ${theme.colors.category[category][status]};
      color: ${status === 'fill' ? theme.colors.category[category].active : theme.colors.background.white};
    `;
  }}
`;

export default TagButton;
