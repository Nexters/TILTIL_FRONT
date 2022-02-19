import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React, { FC } from 'react';
import { PartialPick } from 'types/common';

import { DialogProps } from './Dialog';
import { DialogTemplate, useDialog, UseDialogReturnType } from './DialogTemplate';

interface DialogBottomProps extends Omit<DialogProps, 'message' | 'RenderBody'> {
  children: FC<UseDialogReturnType>;
}

type Props = PartialPick<DialogBottomProps, 'children'>;
type WrapProps = Pick<UseDialogReturnType, 'show'>;

export const DialogBottom: FC<Props> = ({ children, ...props }) => {
  const dialogProps = useDialog({ onClose: props.onClose });
  return (
    <DialogTemplate
      {...props}
      {...dialogProps}
      message=""
      RenderBody={() => {
        return (
          <Wrap show={dialogProps.show}>
            <Header />
            {children({ ...dialogProps })}
          </Wrap>
        );
      }}
    />
  );
};

const openTranslateY = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
`;
const closeTranslateY = keyframes`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(100%);
  }
`;

const Wrap = styled.div<WrapProps>`
  animation: 0.3s forwards ${({ show }) => (show ? openTranslateY : closeTranslateY)};
  transform: translateY(100%);

  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;

  display: flex;
  flex-direction: column;

  background: white;

  border-radius: 10px 10px 0 0;

  overflow: hidden;
`;

const Header = styled.div`
  width: 100%;
  height: 8px;
  border-radius: 16px 16px 0px 0px;
`;
