import styled from '@emotion/styled';
import Button from 'components/Button';
import { Icon } from 'components/icon/Icon';
import InfiniteSlider from 'components/InfiniteSlider';
import Header from 'components/layout/Header';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import type { GetServerSidePropsContext, NextPage } from 'next';
import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { PageWrapper } from 'styles/styled';
import theme from 'styles/theme';
import isMobileDetect from 'utils/isMobileDetect';
import media from 'utils/media';

const Landing = ({ isMobile }: { isMobile: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(isMobile ? theme.size.mobile : theme.size.desktop);

  const handleResize = () => {
    if (ref.current) {
      setWidth(ref.current.offsetWidth);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <PageWrapper ref={ref}>
      <Header
        title={
          <Title>
            <Text color={theme.colors.highLight.purple}>BING BONG</Text>
          </Title>
        }
      />
      <Section onClick={() => {}}>
        <Section.Main />
        <Section.Slider />
        <Section.Helper />
        <Section.Growth />
        <Section.Phrases />
      </Section>
      <Floating size="small" width={width}>
        오늘부터 암묵지 없애기
      </Floating>
    </PageWrapper>
  );
};

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;
const Floating = styled(Button)<{ width: number }>`
  position: fixed;
  width: ${({ width }) => `${width - 48}px`};
  height: 60px;
  bottom: 40px;
  background-color: ${({ theme: { colors } }) => colors.primary.default};
  left: 50%;
  transform: translate(-50%, 0);
  ${media.mobile} {
    width: ${({ width }) => `${width - 32}px`};
  }
`;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const isMobile = isMobileDetect(context.req);
  return {
    props: {
      isMobile,
    },
  };
}

export default Landing;
