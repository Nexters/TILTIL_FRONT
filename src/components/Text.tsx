import styled from '@emotion/styled';
import React, { CSSProperties, HTMLAttributes, PropsWithChildren } from 'react';
import typographies, { Typography } from 'styles/typography';

interface TextProps {
  display: CSSProperties['display'];
  typography: Typography;
  color: CSSProperties['color'];
  fontWeight: CSSProperties['fontWeight'];
  textAlign: CSSProperties['textAlign'];
}

type Props = Partial<TextProps> & HTMLAttributes<HTMLSpanElement>;
type WrapperProps = Required<Pick<TextProps, 'typography' | 'display' | 'fontWeight' | 'textAlign'>>;

// TODOS: h1~h6 태그 태그 대응
const Text = ({
  children,
  display = 'inherit',
  typography = 'subTitle3',
  color = 'inherit',
  fontWeight = 'inherit',
  textAlign = 'inherit',
  ...props
}: PropsWithChildren<Props>) => (
  <StyledSpan
    display={display}
    typography={typography}
    color={color}
    fontWeight={fontWeight}
    textAlign={textAlign}
    {...props}
  >
    {children}
  </StyledSpan>
);

const getFontTypography = (typography: Typography) => typographies[typography];

const StyledSpan = styled.span<WrapperProps>`
  display: ${({ display }) => display};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: ${({ textAlign }) => textAlign};
  ${({ typography }) => getFontTypography(typography)};
`;

export { Text };
