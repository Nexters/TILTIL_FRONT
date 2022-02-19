import { CATEGORY_TEXT } from 'constants/common';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { dimmedElementStyle } from 'styles/styled';

import { CategoryThemeProps } from './TagButton';

type Props = CategoryThemeProps & { size?: 'large' | 'small' };
type WrapperProps = Required<Props>;

const Tag: React.FC<Props> = ({ size = 'small', ...rest }) => {
  const { category } = rest;

  return (
    <Wrapper size={size} {...rest}>
      {CATEGORY_TEXT[category]}
    </Wrapper>
  );
};

const Wrapper = styled.span<WrapperProps>`
  display: inline-block;

  ${({ theme, category, status, size }) => {
    return css`
      background-color: ${theme.colors.category[category][status]};
      color: ${status === 'fill' ? theme.colors.category[category].active : theme.colors.background.white};

      ${size === 'large'
        ? css`
            ${theme.typography.buttonS}
            padding: 6px 0;
            width: 72px;
            height: 32px;
            border-radius: 8px;
            text-align: center;
          `
        : css`
            ${theme.typography.caption1}
            padding: 4px 6px;
            border-radius: 6px;
          `}
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
