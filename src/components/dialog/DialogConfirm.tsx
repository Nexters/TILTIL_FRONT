import styled from '@emotion/styled';
import Button from 'components/Button';
import React, { FC } from 'react';
import { PartialPick } from 'types/common';

import { DialogProps } from './Dialog';
import { DialogTemplate, useDialog } from './DialogTemplate';

interface DialogConfirmProps extends Omit<DialogProps, 'message' | 'RenderContent' | 'noCloseButton'> {
  title: string;
  description: string;
  onConfirm: (result: boolean) => Promise<void>;
  confirmLabel: string;
  closeLabel: string;
}

type Props = PartialPick<DialogConfirmProps, 'title' | 'description'>;

export const DialogConfirm: FC<Props> = (props) => {
  const dialogProps = useDialog({ onClose: props.onClose });

  return (
    <DialogTemplate
      {...props}
      {...dialogProps}
      message=""
      noCloseButton
      RenderContent={() => {
        return (
          <>
            <Content>
              <Title>{props.title}</Title>
              <Description>{props.description}</Description>
            </Content>
            <ButtonWrap>
              <CloseButton
                shape="square"
                onClick={async () => {
                  dialogProps.close();
                }}
              >
                {props.closeLabel || '취소'}
              </CloseButton>
              <ConfirmButton
                shape="square"
                onClick={async () => {
                  await props.onConfirm?.(true);
                  dialogProps.pureClose();
                }}
              >
                {props.confirmLabel || '확인'}
              </ConfirmButton>
            </ButtonWrap>
          </>
        );
      }}
    />
  );
};

const ButtonWrap = styled.div`
  display: flex;
`;

const ConfirmButton = styled(Button)`
  flex-grow: 1;
`;

const CloseButton = styled(ConfirmButton)`
  background: ${({ theme }) => theme.colors.background.cancel};
  color: ${({ theme }) => theme.colors.text.placeholder};

  :hover {
    background-color: ${({ theme }) => theme.colors.background.global};
  }
  :active {
    background-color: ${({ theme }) => theme.colors.background.global};
  }
`;

const Content = styled.div`
  padding: 24px 16px 28px;
`;

const Title = styled.div`
  ${({ theme }) => theme.typography.subTitle3};
  text-align: center;
  color: ${({ theme }) => theme.colors.text.highlight};
`;

const Description = styled.div`
  margin-top: 4px;
  ${({ theme }) => theme.typography.body5};
  text-align: center;
  color: ${({ theme }) => theme.colors.text.idle};
`;
