import { ClassNames } from '@emotion/react';
import styled from '@emotion/styled';
import { InputHTMLAttributes } from 'react';
import colors from 'styles/colors';

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  background: keyof typeof colors.background;
  value: string;
}

type Props = Partial<TextareaProps>;
type WrapperProps = Pick<TextareaProps, 'background'>;

export const Textarea: React.FC<Props> = ({ background = 'default', value, maxLength = 8, ...rest }) => {
  return (
    <Wrapper className={`flex-column align-items-end ${rest.className}`} background={background}>
      <textarea value={value} maxLength={maxLength} {...rest} />
      <LengthWrapper>{`${value?.length ?? 0} / ${maxLength}`}</LengthWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  background-color: ${({ theme, background: key }) => theme.colors.background[key]};
  border-radius: 10px;
  align-items: end;
  padding: 16px;

  textarea {
    width: 100%;
    resize: none;
    outline: none;
    border: none;
    background-color: ${({ theme, background: key }) => theme.colors.background[key]};
  }
`;

const LengthWrapper = styled.span`
  color: ${({ theme }) => theme.colors.text.placeholder};
  ${({ theme }) => theme.typography.body4};
  text-align: right;
`;
