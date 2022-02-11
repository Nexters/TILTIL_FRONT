import styled from '@emotion/styled';
import React, { CSSProperties, PropsWithChildren } from 'react';
import typographies, { Typography } from 'styles/typography';

interface TextProps {
  display: CSSProperties['display'];
  typography: Typography;
  color: CSSProperties['color'];
}

type Props = Partial<TextProps>;
type WrapperProps = Required<Pick<TextProps, 'typography' | 'display'>>;

const Text = ({
  children,
  display = 'inherit',
  typography = 'subTitle3',
  color = 'inherit',
}: PropsWithChildren<Props>) => (
  <StyledSpan display={display} typography={typography} color={color}>
    {children}
  </StyledSpan>
);

const getFontTypography = (typography: Typography) => typographies[typography];

const StyledSpan = styled.span<WrapperProps>`
  display: ${({ display }) => display};
  color: ${({ color }) => color};
  ${({ typography }) => getFontTypography(typography)};
`;

export { Text };
