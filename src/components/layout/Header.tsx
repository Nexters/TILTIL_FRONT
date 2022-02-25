import { ROUTE } from 'constants/route';

import styled from '@emotion/styled';
import { Icon, LeftButtonIconName, RightButtonIconName } from 'components/icon/Icon';
import { useRouter } from 'next/router';
import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { Background } from 'types/styled';
import media from 'utils/media';

import RightButton from './RightButton';

export interface HeaderProps {
  title: ReactNode;
  leftButton: LeftButtonIconName;
  rightButton: RightButtonIconName[];
  background: Background;
}

type Props = Partial<HeaderProps>;
type WrapperProps = Required<Pick<HeaderProps, 'background'>>;

const Header: React.VFC<Props> = ({ title, leftButton, rightButton, background = 'white' }) => {
  const router = useRouter();
  const [backgroundColor, setBackgroundColor] = useState<Background>(background);

  const leftButtonHandlers = useMemo(
    () => ({
      home: () => router.push(ROUTE.users),
    }),
    []
  );

  const handleScroll = () => {
    if (window.scrollY === 0) {
      if (background === backgroundColor) {
        return;
      }
      setBackgroundColor(background);
    } else {
      if (backgroundColor === 'white') {
        return;
      }
      setBackgroundColor('white');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [backgroundColor]);

  return (
    <Wrapper background={backgroundColor}>
      {leftButton && (
        <LeftButton onClick={leftButtonHandlers[leftButton]}>
          <Icon name={leftButton} />
        </LeftButton>
      )}

      {React.isValidElement(title) ? title : <Title>{title}</Title>}

      {rightButton && (
        <RightButtons>
          {rightButton.map((button) => (
            <RightButton key={button} button={button} />
          ))}
        </RightButtons>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.header<WrapperProps>`
  position: fixed;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ theme: { size } }) => size.desktop}px;
  height: ${({ theme: { header } }) => header.desktop}px;
  padding: 0 ${({ theme: { padding } }) => padding.md}px;
  background-color: ${({ theme: { colors }, background }) => colors.background[background]};
  z-index: ${({ theme: { zIndex } }) => zIndex.header};

  ${media.tablet} {
    width: 100%;
  }

  button {
    display: flex;
  }
`;

const LeftButton = styled.button`
  position: absolute;
  left: ${({ theme: { padding } }) => padding.md}px;
`;

const RightButtons = styled.div`
  position: absolute;
  right: ${({ theme: { padding } }) => padding.md}px;
  display: flex;
  column-gap: ${({ theme: { padding } }) => padding.md}px;
`;

const Title = styled.h1`
  ${({ theme: { typography: typo } }) => typo.subTitle1};
  color: ${({ theme: { colors } }) => colors.text.idle};
`;

export default Header;
