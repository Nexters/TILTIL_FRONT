import { CATEGORY_TEXT, Category } from 'constants/common';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ButtonHTMLAttributes } from 'react';
import { categoryThemeHandlers } from 'styles/colors';

export interface CategoryThemeProps {
  category: keyof Category;
  status: 'fill' | 'active';
}

// Category Tag
export const Tag = styled.span<CategoryThemeProps>`
  padding: 4px 6px;
  border-radius: 6px;

  ${({ theme: { typography } }) => typography.caption1}
  ${({ category, status }) => {
    return categoryThemeHandlers[category](status);
  }}
`;

// Category Tag Button
type Props = CategoryThemeProps & ButtonHTMLAttributes<HTMLButtonElement>;

const TagButton: React.FC<Props> = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{CATEGORY_TEXT[rest.category]}</Wrapper>;
};

const Wrapper = styled.button<Props>`
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

    return categoryThemeHandlers[category](status);
  }}
`;

export default TagButton;
