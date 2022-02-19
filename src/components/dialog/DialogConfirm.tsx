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
            <DialogContent>
              <DialogTitle>{props.title}</DialogTitle>
              <DialogDescription>{props.description}</DialogDescription>
            </DialogContent>
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
  font-size: 16px;
  width: 150px;
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

export const DialogContent = styled.div`
  padding: 24px 16px 28px;
`;

export const DialogTitle = styled.div`
  ${({ theme }) => theme.typography.subTitle3};
  text-align: center;
  color: ${({ theme }) => theme.colors.text.highlight};
`;

export const DialogDescription = styled.div`
  margin-top: 4px;
  ${({ theme }) => theme.typography.body5};
  text-align: center;
  color: ${({ theme }) => theme.colors.text.idle};
`;
