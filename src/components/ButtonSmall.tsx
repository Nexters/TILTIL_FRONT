import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ButtonHTMLAttributes } from 'react';
import colors, { CategoryStatus } from 'styles/colors';
import typography from 'styles/typography';

type CustomColor = [
  keyof typeof colors,
  (
    | keyof typeof colors.primary
    | keyof typeof colors.background
    | keyof typeof colors.ui
    | keyof typeof colors.icon
    | keyof typeof colors.text
    | keyof typeof colors.category
  ),
  CategoryStatus?
];

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor: CustomColor;
  textColor: CustomColor;
}

const ButtonSmall: React.FC<Props> = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export const buttonSmallStyle = css`
  ${typography.buttonS}
  border-radius: 8px;
`;

const Wrapper = styled.button<Props>`
  ${buttonSmallStyle}
  padding: 8px 12px;

  ${({ theme, backgroundColor, textColor }) => {
    const [bgPalette, bgName, bgStatus] = backgroundColor;
    const [textPalette, textName, textStatus] = textColor;

    const background = bgStatus
      ? theme.colors[bgPalette][bgName as never][bgStatus as never]
      : theme.colors[bgPalette][bgName as never];
    const color = textStatus
      ? theme.colors[textPalette][textName as never][textStatus as never]
      : theme.colors[textPalette][textName as never];

    return css`
      background-color: ${background};
      color: ${color};
    `;
  }}
`;

export default ButtonSmall;
