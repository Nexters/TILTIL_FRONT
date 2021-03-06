import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import Button from 'components/Button';
import { Icon } from 'components/icon/Icon';
import React, { FC, memo, ReactElement, ReactNode, useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { dialogStore, useDialogStore } from 'states/dialogStore';
import { PartialPick } from 'types/common';

export interface DialogTemplateProps {
  show: boolean;
  close: () => Promise<void>;
  message: string;
  onShow: () => Promise<void>;
  noBackdrop: boolean;
  noCloseButton: boolean;

  RenderBody: () => ReactElement;
  RenderContent: () => ReactElement;
  hasCloseButton?: boolean;
  CloseButtonText?: string;
}

type Props = PartialPick<DialogTemplateProps, 'show' | 'close' | 'message'>;
export interface UseDialogProps {
  onClose: () => Promise<boolean>;
}
export interface UseDialogReturnType extends Pick<Props, 'show' | 'close'> {
  pureClose: () => void;
}

export const DialogTemplate: FC<Props> = ({
  show,
  close,
  message,

  onShow,

  noBackdrop,
  noCloseButton,
  hasCloseButton,
  CloseButtonText,

  RenderBody,
  RenderContent,
}) => {
  const dialogs = useRecoilValue(dialogStore);

  const ref = useRef<HTMLDivElement>(null);
  const { onClosed } = useDialogStore();
  useEffect(() => {
    onShow?.();

    (document.querySelector(':focus') as HTMLElement)?.blur();
    document.body.style.overflow = 'hidden';

    return () => {
      if (dialogs.length === 1) {
        document.body.style.overflow = 'unset';
      }
    };
  }, []);

  useEffect(() => {
    const key = (ref.current?.parentNode as HTMLDivElement).id;
    if (!show && !!key) {
      onClosed(key);
    }
  }, [show]);

  return (
    <div ref={ref} role="dialog" aria-modal="true">
      <DefaultRenderBackDrop
        show={show}
        close={close}
        message={message}
        noBackdrop={noBackdrop}
        noCloseButton={noCloseButton}
        hasCloseButton={hasCloseButton}
        CloseButtonText={CloseButtonText}
        RenderBody={RenderBody}
        RenderContent={RenderContent}
      />
    </div>
  );
};

const DefaultRenderContent = ({ RenderContent, message }: any): ReactElement => {
  if (RenderContent) {
    return RenderContent();
  }
  return <Content>{LineBrakingText(message)}</Content>;
};

const DefaultRenderBackDrop = ({
  show,
  close,
  message,
  noBackdrop,
  noCloseButton,
  hasCloseButton,
  CloseButtonText,
  RenderBody,
  RenderContent,
}: any): ReactElement => {
  return (
    <Backdrop
      noBackdrop={!!noBackdrop}
      show={show}
      onClick={() => {
        if (noBackdrop) {
          return;
        }
        close();
      }}
    >
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <DefaultRenderBody
          show={show}
          close={close}
          message={message}
          noBackdrop={noBackdrop}
          noCloseButton={noCloseButton}
          hasCloseButton={hasCloseButton}
          CloseButtonText={CloseButtonText}
          RenderBody={RenderBody}
          RenderContent={RenderContent}
        />
      </button>
    </Backdrop>
  );
};

const DefaultRenderBody = ({
  show,
  close,
  message,
  noBackdrop,
  noCloseButton,
  hasCloseButton,
  CloseButtonText,
  RenderBody,
  RenderContent,
}: any): ReactElement => {
  if (RenderBody) {
    return RenderBody();
  }
  return (
    <Wrapper show={show}>
      {!noCloseButton && (
        <CloseButtonWrap>
          <button
            type="button"
            onClick={() => {
              close();
            }}
          >
            <Icon className="m-2" name="cancel" />
          </button>
        </CloseButtonWrap>
      )}
      <DefaultRenderContent
        show={show}
        close={close}
        message={message}
        noBackdrop={noBackdrop}
        noCloseButton={noCloseButton}
        hasCloseButton={hasCloseButton}
        CloseButtonText={CloseButtonText}
        RenderBody={RenderBody}
        RenderContent={RenderContent}
      />
      {hasCloseButton && (
        <Button size="large" fullWidth onClick={() => close()} shape="square">
          {CloseButtonText}
        </Button>
      )}
    </Wrapper>
  );
};

export const useDialog = ({ onClose }: Partial<UseDialogProps>): UseDialogReturnType => {
  const [show, setShow] = useState(true);

  const close = async () => {
    if (onClose && !(await onClose?.())) {
      return;
    }
    pureClose();
  };

  const pureClose = () => {
    setShow(false);
  };

  return { show, close, pureClose };
};

export const LineBrakingText = (text: ReactNode): ReactNode => {
  return (
    <>
      {typeof text === 'string'
        ? text.split('\n').map((line) => {
            return (
              <span key={line}>
                {line}
                <br />
              </span>
            );
          })
        : text}
    </>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Backdrop = styled.div<{ show: boolean; noBackdrop: boolean }>`
  opacity: 1;
  animation: 0.3s forwards ${({ show }) => (show ? fadeIn : fadeOut)};
  background: ${({ noBackdrop }) => (noBackdrop ? 'transparent' : 'rgba(34, 33, 31, 0.48)')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  left: 0;
  z-index: 1000;
`;

const Wrapper = styled.div<{ show: boolean }>`
  width: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  background: ${({ theme }) => theme.colors.background.white};

  box-shadow: 0px 8px 25px rgba(29, 29, 31, 0.06);
  border-radius: 12px;
  overflow: hidden;
`;

const Content = styled.div`
  padding: 0 16px 24px;
`;

const CloseButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
