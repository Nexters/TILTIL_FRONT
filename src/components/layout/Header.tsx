import { ROUTE } from 'constants/route';

import styled from '@emotion/styled';
import { Icon, LeftButtonIconName, RightButtonIconName } from 'components/icon/Icon';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { Background } from 'types/styled';

import RightButton from './RightButton';

export interface HeaderProps {
  title: string;
  leftButton: LeftButtonIconName;
  rightButton: RightButtonIconName[];
  background: Background;
}

type Props = Partial<HeaderProps>;
type WrapperProps = Required<Pick<HeaderProps, 'background'>>;

const Header: React.VFC<Props> = ({ title, leftButton, rightButton, background = 'white' }) => {
  const router = useRouter();

  const leftButtonHandlers = useMemo(
    () => ({
      home: () => router.push(ROUTE.main),
    }),
    []
  );

  return (
    <Wrapper background={background}>
      {leftButton && (
        <LeftButton onClick={leftButtonHandlers[leftButton]}>
          <Icon name={leftButton} />
        </LeftButton>
      )}

      {title && <Title>{title}</Title>}

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
  position: sticky;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 56px;
  padding: 0 ${({ theme: { padding } }) => padding.md}px;
  background-color: ${({ theme: { colors }, background }) => colors.background[background]};

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
