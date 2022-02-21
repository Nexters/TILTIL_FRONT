import styled from '@emotion/styled';
import fillingIcebergAnimation from 'assets/lotties/fillingIceberg.json';
import { Icon } from 'components/icon/Icon';
import InfiniteSlider from 'components/InfiniteSlider';
import { Text } from 'components/Text';
import React from 'react';
import Lottie from 'react-lottie';
import theme from 'styles/theme';
import convertNewLineToJSX from 'utils/convertNewLineToJSX';
import media from 'utils/media';

interface SectionProps {
  onClick: VoidFunction;
}

interface Components {
  Main: () => JSX.Element;
  Slider: () => JSX.Element;
  IceMountain: () => JSX.Element;
  Helper: () => JSX.Element;
  Growth: () => JSX.Element;
  Phrases: () => JSX.Element;
}

const Section: React.FC<SectionProps> & Components = ({ children }) => {
  return <div>{children}</div>;
};

const Main = () => {
  return (
    <MainWrapper>
      <MainTitle>
        <Text typography="h2">요즘 일잘러들이 선택한 회고 방법</Text>
        <Icon className="mt-1" name="blueBingBong" />
      </MainTitle>
      <MainIconWrapper>
        <Icon name="bingbongs" />
      </MainIconWrapper>
    </MainWrapper>
  );
};

const Slider = () => {
  return (
    <SliderWrapper>
      <Text typography="h6">그거 아세요?</Text>
      <Text className="mt-1" typography="h6">
        요즘 일잘러들은
      </Text>
      <Text typography="h3" color={theme.colors.text.highlight}>
        자신만의 &lsquo;암묵지&rsquo;를 가지고 있대요
      </Text>
      <div className="w-100 mt-10">
        <InfiniteSlider duration={16}>
          {Array.from({ length: 5 }).map((_, i) => {
            // eslint-disable-next-line react/no-array-index-key
            return <Icon key={i} name="iceCubes" />;
          })}
        </InfiniteSlider>
      </div>
    </SliderWrapper>
  );
};

const IceMountain = () => {
  return <></>;
};

const Helper = () => {
  return (
    <HelperWrapper>
      <Text typography="h6">저희가 도와드릴게요.</Text>
      <Text typography="h3" color={theme.colors.text.highlight}>
        당신의 암묵지를 키울 수 있도록
      </Text>
      <Text className="mt-1" typography="body5" color={theme.colors.text.subdued}>
        BingBong과 함께라면 쉬워져요.
      </Text>
      <HelperIconWrapper>
        <Icon name="togetherIcon" />
        <Icon name="easyWriteIcon" />
        <Icon name="togetherIcon" />
      </HelperIconWrapper>
    </HelperWrapper>
  );
};

const Growth = () => {
  return (
    <GrowthWrapper>
      <Text typography="h6">암묵지를 키울 때마다</Text>
      <Text typography="h3" color={theme.colors.text.highlight}>
        귀여운 빙하 조각이 모여요!
      </Text>
      <Text className="mt-1" typography="body5" color={theme.colors.text.subdued}>
        빙하 조각만큼 나도 성장 중!
      </Text>
      <GrowthIconwrapper>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: fillingIcebergAnimation,
          }}
        />
      </GrowthIconwrapper>
    </GrowthWrapper>
  );
};

const Phrases = () => {
  return (
    <PhraseWrapper>
      <Text typography="h3" textAlign="center">
        {convertNewLineToJSX('그럼 우리 이제,\n성장하러 가볼까요?')}
      </Text>
      <Text className="mt-3" typography="subTitle2" textAlign="center">
        {convertNewLineToJSX('처음에는 우리가 습관을 만들지만\n그 다음에는 습관이 우리를 만든다.\n-존 드라이든-')}
      </Text>
    </PhraseWrapper>
  );
};

Section.Main = Main;

Section.Slider = Slider;

Section.IceMountain = IceMountain;

Section.Helper = Helper;

Section.Growth = Growth;

Section.Phrases = Phrases;

const DefaultSection = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MainWrapper = styled(DefaultSection)`
  align-items: center;
  padding: 0px 22px;
  height: 696px;
  ${media.mobile} {
    height: 640px;
  }
  :first-of-type {
    margin-top: 73px;
    ${media.mobile} {
      margin-top: 56px;
    }
  }
`;
const MainTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MainIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 72px;
`;
const SliderWrapper = styled(DefaultSection)`
  height: 499px;
  background-color: ${({ theme: { colors } }) => colors.background.default};
  ${media.mobile} {
    height: 492px;
  }
`;
const HelperWrapper = styled(DefaultSection)`
  background-color: ${({ theme: { colors } }) => colors.background.default};
  height: 463px;
  ${media.mobile} {
    height: 864px;
  }
`;
const HelperIconWrapper = styled.div`
  display: flex;
  margin-top: 68px;
  ${media.mobile} {
    margin-top: 64px;
    flex-direction: column;
    justify-content: space-around;
  }
`;
const GrowthWrapper = styled(DefaultSection)`
  height: 370px;
`;
const GrowthIconwrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
  margin-top: 42px;
`;
const PhraseWrapper = styled(DefaultSection)`
  height: 401px;
  background-color: ${({ theme: { colors } }) => colors.primary.extraLight};
  ${media.mobile} {
    height: 396px;
  }
`;

export { Section };
