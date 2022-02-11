import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React, { PropsWithChildren, Children } from 'react';

interface Props {
  duration?: number;
}

const InfiniteSlider = ({ children: childrens, duration, ...props }: PropsWithChildren<Props>) => {
  const childrenCount = Children.count(childrens);

  return (
    <div {...props}>
      <Wrapper>
        <Lane count={childrenCount}>
          {Array.from({ length: 2 }).map(() =>
            Children.map(childrens, (children) => (
              <Item count={childrenCount} duration={duration}>
                {children}
              </Item>
            ))
          )}
        </Lane>
      </Wrapper>
    </div>
  );
};

const flow = (count: number) => keyframes`
  100% { transform:translateX(calc(-140px * ${count})); }
`;

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
`;

const Lane = styled.div<{ count: number }>`
  display: flex;
  width: ${({ count }) => `calc(-140 * ${count} * 2)`};
`;

const Item = styled.div<{ count: number; duration?: number }>`
  width: max-content;
  animation: ${({ count }) => flow(count)} ${({ duration }) => `${duration ? `${duration}s` : '25s'}`} linear infinite;
`;

export default InfiniteSlider;
