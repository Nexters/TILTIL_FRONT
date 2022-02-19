import styled from '@emotion/styled';
import React from 'react';
import theme from 'styles/theme';
import { PartialPick } from 'types/common';
import media from 'utils/media';

import { Icon } from './icon/Icon';
import { Text } from './Text';

interface GuideIllustProps {
  isMobile: boolean;
  name: string;
}

type Props = PartialPick<GuideIllustProps, 'isMobile'>;

const GuideIllust = ({ isMobile, name = '최다예' }: Props) => {
  return (
    <Wrapper>
      <GradientWrapper>
        <Icon name={isMobile ? 'cloudWithMountainM' : 'cloudWithMountainD'} />
      </GradientWrapper>
      <TextWrapper>
        <Text typography="h2" color={theme.colors.text.highlight}>
          {name}님
        </Text>
        <Text typography="h1" color={theme.colors.text.highlight}>
          오늘 배운 것을 기록해 볼까요?
        </Text>
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 306px;
  background-color: ${({ theme: { colors } }) => colors.background.white};

  ${media.mobile} {
    height: 254px;
  }
`;

const GradientWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background: radial-gradient(43.7% 86.49% at 100% 100%, rgba(193, 225, 255, 0.3) 0%, rgba(193, 225, 255, 0) 100%),
    radial-gradient(74.61% 74.61% at 1.25% 100%, rgba(58, 161, 255, 0.3) 0%, rgba(58, 161, 255, 0) 100%);
  border-radius: 0px;
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const TextWrapper = styled.div`
  position: relative;
  top: -93px;
  padding: 0px 24px;
  display: flex;
  flex-direction: column;
`;

export default GuideIllust;
