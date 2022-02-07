import styled from '@emotion/styled';
import { ArrowLeft } from 'assets';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { Background } from 'types/styled';

interface Props {
  title?: string;
  leftBtn?: ReactNode;
  rightBtn?: ReactNode;
  background?: Background;
}

const Header: React.VFC<Props> = ({ title, leftBtn, rightBtn, background = 'white' }) => {
  const router = useRouter();

  const handleBack = () => router.back();

  return (
    <Wrapper background={background}>
      <div>
        {leftBtn ?? (
          <button type="button" onClick={handleBack}>
            <ArrowLeft />
          </button>
        )}
      </div>

      <div>{title && <Title>{title}</Title>}</div>

      <div>{rightBtn}</div>
    </Wrapper>
  );
};

const Wrapper = styled.header<Required<Pick<Props, 'background'>>>`
  position: sticky;
  top: 0px;
  display: flex;
  justify-content: space-between;

  height: 56px;
  padding: 0 ${({ theme: { padding } }) => padding.md}px;
  background-color: ${({ theme: { colors }, background }) => colors.background[background]};

  > div {
    min-width: 24px;
    display: flex;
    align-items: center;

    button,
    a {
      display: flex;
    }
  }
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 18px;
`;

export default Header;
