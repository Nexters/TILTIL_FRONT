import { CATEGORY_TEXT } from 'constants/common';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { dimmedElementStyle } from 'styles/styled';

import { CategoryThemeProps } from './TagButton';

const Tag: React.FC<CategoryThemeProps> = (props) => {
  const { category } = props;

  return <Wrapper {...props}>{CATEGORY_TEXT[category]}</Wrapper>;
};

const Wrapper = styled.span<CategoryThemeProps>`
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

export default Tag;
