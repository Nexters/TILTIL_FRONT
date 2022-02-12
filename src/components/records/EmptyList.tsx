import styled from '@emotion/styled';
import { EmptyIcon } from 'assets/svgs';
import React from 'react';

const EmptyList = () => {
  return (
    <Wrapper>
      <EmptyIcon />
      아직 암묵지가 없어요.
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;

  ${({ theme: { typography } }) => typography.body2}
  color: ${({ theme: { colors } }) => colors.text.placeholder};
`;

export default EmptyList;
