import { CATEGORY_TEXT } from 'constants/common';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ButtonHTMLAttributes } from 'react';
import colors, { CategoryStatus } from 'styles/colors';
import { dimmedElementStyle } from 'styles/styled';

import { buttonSmallStyle } from './ButtonSmall';

export interface CategoryThemeProps {
  category: keyof typeof colors.category;
  status: CategoryStatus;
}

// Category Tag
export const Tag = styled.span<CategoryThemeProps>`
  padding: 4px 6px;
  border-radius: 6px;

  ${({ theme: { typography } }) => typography.caption1}
  ${({ theme, category, status }) => {
    return css`
      background-color: ${theme.colors.category[category][status]};
      color: ${status === 'fill' ? theme.colors.category[category].active : theme.colors.background.white};
    `;
  }}
`;
export const DimmedTag = styled.span`
  ${dimmedElementStyle}
  width: 47px;
  height: 24px;
  border-radius: 6px;
`;

// Category Tag Button
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
