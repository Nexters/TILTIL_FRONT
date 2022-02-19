import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Icon } from 'components/icon/Icon';
import React, { FC, ReactElement, useEffect, useRef } from 'react';

import { DialogProps } from './Dialog';
import { DialogTemplate, LineBrakingText, useDialog, UseDialogReturnType } from './DialogTemplate';

type ToastProps = Omit<DialogProps, 'noBackdrop' | 'onShow' | 'RenderBody'>;
type ToastComponentProps = Pick<UseDialogReturnType, 'show'>;

export const Toast: FC<ToastProps> = (props) => {
  const TOAST_PORTAL_DURATION = 3000;
  const timeoutId = useRef(0);

  const { ...dialogProps } = useDialog({ onClose: props.onClose });

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId.current);
    };
  }, []);

  return (
    <DialogTemplate
      {...dialogProps}
      {...props}
      noBackdrop
      onShow={async (): Promise<void> => {
        timeoutId.current = setTimeout(() => dialogProps.close(), TOAST_PORTAL_DURATION) as unknown as number;
      }}
      RenderBody={(): ReactElement => {
        return (
          <ToastWrapper>
            <ToastComponent
              show={dialogProps.show}
              onClick={() => {
                dialogProps.close();
              }}
              role="alert"
            >
              <Icon className="mr-1" name="check" /> {LineBrakingText(props.message)}
            </ToastComponent>
          </ToastWrapper>
        );
      }}
    />
  );
};

const ToastWrapper = styled.div`
  position: fixed;
  z-index: 1000;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);

  ${({ theme }) => css`
    @media ${theme.devices.mobile} {
      top: 80px;
    }
  `}
`;

const ToastComponent = styled.div<ToastComponentProps>`
  display: flex;
  align-items: center;
  width: 312px;
  margin: 0 auto;
  padding: 16px 24px;
  border-radius: 16px;
  background: #3aa1ff;
  text-align: center;
  ${({ theme }) => theme.typography.body4}
  color: ${({ theme }) => theme.colors.text.inverse};
`;
