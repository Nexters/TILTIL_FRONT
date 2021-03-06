import styled from '@emotion/styled';
import { GreetingMessageResponse } from 'apis/api';
import React from 'react';
import theme from 'styles/theme';
import { PartialPick } from 'types/common';
import media from 'utils/media';

import { Icon } from './icon/Icon';
import { Text } from './Text';

interface GuideIllustProps {
  isMobile: boolean;
  greeting?: GreetingMessageResponse;
}

type Props = PartialPick<GuideIllustProps, 'isMobile'>;

const GuideIllust = ({ isMobile, greeting }: Props) => {
  return (
    <Wrapper>
      <GradientWrapper>
        <SIcon name={isMobile ? 'cloudWithMountainM' : 'cloudWithMountainD'} />
        <TextWrapper>
          <SignupDaysWrapper>
            <Text typography="body1" fontWeight="bold">
              {greeting?.signUpDays}일째
            </Text>
            <Text typography="body2">암묵지 만드는 중</Text>
          </SignupDaysWrapper>
          <Text typography="h1" color={theme.colors.text.highlight}>
            {greeting?.content}
          </Text>
        </TextWrapper>
      </GradientWrapper>
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
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  background: radial-gradient(43.7% 86.49% at 100% 100%, rgba(193, 225, 255, 0.3) 0%, rgba(193, 225, 255, 0) 100%),
    radial-gradient(74.61% 74.61% at 1.25% 100%, rgba(58, 161, 255, 0.3) 0%, rgba(58, 161, 255, 0) 100%);
  border-radius: 0px;

  ${media.mobile} {
    justify-content: flex-end;
    align-items: flex-end;
  }
`;

const SIcon = styled(Icon)`
  position: absolute;
`;

const SignupDaysWrapper = styled.div`
  display: flex;
  flex-direction: row;

  span + span {
    margin-left: 4px;
  }
`;

const TextWrapper = styled.div`
  position: relative;
  padding: 0px 24px;
  margin-bottom: 34px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  word-break: keep-all;
`;

export default GuideIllust;
