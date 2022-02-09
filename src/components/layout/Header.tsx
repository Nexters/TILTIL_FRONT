import styled from '@emotion/styled';
import { Icon, IconName } from 'components/icon/Icon';
import { useRouter } from 'next/router';
import { Background } from 'types/styled';

export interface HeaderProps {
  title: string;
  leftButton: IconName;
  rightButton: IconName;
  background: Background;
}

type Props = Partial<HeaderProps>;
type WrapperProps = Required<Pick<HeaderProps, 'background'>>;

const Header: React.VFC<Props> = ({ title, leftButton, rightButton = 'more', background = 'white' }) => {
  const router = useRouter();

  const handleBack = () => router.back();

  return (
    <Wrapper background={background}>
      <div>
        {leftButton ?? (
          <button type="button" onClick={handleBack}>
            <Icon name="arrow" />
          </button>
        )}
      </div>

      <div>{title && <Title>{title}</Title>}</div>

      <div>
        <Icon name={rightButton} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header<WrapperProps>`
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
  ${({ theme: { typography: typo } }) => typo.subTitle1};
  color: ${({ theme: { colors } }) => colors.text.idle};
`;

export default Header;
