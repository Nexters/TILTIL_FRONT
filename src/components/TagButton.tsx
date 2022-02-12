import { CATEGORY_TEXT } from 'constants/common';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ButtonHTMLAttributes } from 'react';
import theme from 'styles/theme';

export interface CategoryThemeProps {
  category: keyof typeof theme.colors.category;
  status: 'fill' | 'active';
}

// Category Tag
export const Tag = styled.span<CategoryThemeProps>`
  padding: 4px 6px;
  border-radius: 6px;

  ${({ theme: { typography } }) => typography.caption1}
  ${({ theme: { colors }, category, status }) => {
    return css`
      background-color: ${colors.category[category][status]};
      color: ${status === 'fill' ? colors.category[category].active : colors.background.white};
    `;
  }}
`;

// Category Tag Button
type TagButtonProps = CategoryThemeProps & ButtonHTMLAttributes<HTMLButtonElement>;

const TagButton: React.FC<TagButtonProps> = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{CATEGORY_TEXT[rest.category]}</Wrapper>;
};

const Wrapper = styled.button<TagButtonProps>`
  width: 72px;
  height: 32px;
  border-radius: 8px;

  ${({ theme: { typography } }) => typography.buttonS}
  ${({ theme: { colors }, category, status, disabled }) => {
    if (disabled)
      return css`
        background-color: ${colors.ui.subdued};
        color: ${colors.text.placeholder};
      `;

    return css`
      background-color: ${colors.category[category][status]};
      color: ${status === 'fill' ? colors.category[category].active : colors.background.white};
    `;
  }}
`;

export default TagButton;
