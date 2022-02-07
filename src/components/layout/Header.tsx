import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ArrowLeft } from 'assets';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import theme from 'styles/theme';
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

  > div {
    min-width: 24px;
    display: flex;
    align-items: center;

    button,
    a {
      display: flex;
    }
  }

  ${({ theme: { header }, background }) => {
    return css`
      height: ${header.height}px;
      padding: 0 ${header.padding}px;
      background-color: ${theme.colors.background[background]};
    `;
  }}
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 18px;
`;

export default Header;
