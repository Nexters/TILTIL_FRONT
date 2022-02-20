import { ROUTE } from 'constants/route';

import styled from '@emotion/styled';
import { useTilDeleteMutation } from 'apis/til';
import Button from 'components/Button';
import { Dialog } from 'components/dialog/Dialog';
import { DialogBottom } from 'components/dialog/DialogBottom';
import { DialogConfirm } from 'components/dialog/DialogConfirm';
import { Icon, RightButtonIconName } from 'components/icon/Icon';
import { Text } from 'components/Text';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import { useDialogStore } from 'states/dialogStore';

interface Props {
  button: RightButtonIconName;
}

interface ShareDialogProps {
  url: string;
  onCopy: () => void;
}

const ShareDialog: React.VFC<ShareDialogProps> = ({ url, onCopy }) => (
  <Dialog
    message=""
    RenderContent={() => (
      <div className="mx-2 mb-2">
        <ShareDialogTitle>나의 암묵지를 공유해봐요!</ShareDialogTitle>
        <ShareDialogDescription>열심히 키운 나의 암묵지를 자랑하고 친구들과 함께 성장해봐요!</ShareDialogDescription>
        <div>
          <ShareLabel typography="body4" className="mt-3 mb-1">
            공유 링크
          </ShareLabel>
          <ShareURLWrapper>
            <input className="mr-1" type="text" disabled value={url} />
            <ShareButton size="small" onClick={onCopy}>
              복사
            </ShareButton>
          </ShareURLWrapper>
        </div>
      </div>
    )}
  />
);

const RightButton: React.VFC<Props> = ({ button }) => {
  const { open, toast } = useDialogStore();
  const { query, replace, push, asPath } = useRouter();
  const { mutateAsync: deleteTil } = useTilDeleteMutation();
  const recordId = Number(query?.recordId) || 0;
  const rightButtonHandlers = useMemo(
    () => ({
      user: () => {
        push(ROUTE.my);
      },
      share: () => {
        const url = `https://bing-bong.today${asPath}`;
        open(
          <ShareDialog
            url={url}
            onCopy={() => {
              navigator.clipboard.writeText(url);
              toast('링크를 복사했어요!');
            }}
          />
        );
      },
      more: () => {
        open(
          <DialogBottom noCloseButton>
            {({ close }) => (
              <>
                <ul>
                  <li
                    className="d-flex p-4 align-items-center"
                    onClick={() => {
                      close();
                      open(
                        <DialogConfirm
                          title="정말 삭제하시겠어요?"
                          description="삭제한 글은 다시 복구할 수 없어요"
                          confirmLabel="삭제하기"
                          onConfirm={async () => {
                            await deleteTil(recordId);
                            replace('/records');
                          }}
                        />
                      );
                    }}
                  >
                    <Icon name="delete" className="mr-2" />
                    <Text typography="listMenu">삭제</Text>
                  </li>
                  <Link href={`/records/${recordId}?type=modify`} passHref>
                    <li className="d-flex p-4" onClick={() => close()}>
                      <Icon name="edit" className="mr-2" />
                      <Text typography="listMenu">수정</Text>
                    </li>
                  </Link>
                </ul>
              </>
            )}
          </DialogBottom>
        );
      },
      cancel: () => {
        replace('/');
      },
      edit: () => {
        push('/records/new');
      },
    }),
    []
  );

  return (
    <button type="button" onClick={rightButtonHandlers[button]}>
      <Icon name={button} />
    </button>
  );
};

const ShareDialogTitle = styled.div`
  text-align: start;
  ${({ theme }) => theme.typography.h3}
  color: ${({ theme }) => theme.colors.text.highlight};
`;

const ShareDialogDescription = styled.div`
  margin-top: 12px;
  text-align: start;
  ${({ theme }) => theme.typography.body4}
`;

const ShareLabel = styled(Text)`
  display: flex;
  color: ${({ theme }) => theme.colors.text.subdued};
`;

const ShareURLWrapper = styled.div`
  display: flex;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.background.default};
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 18px 8px;
  min-width: 280px;

  input {
    display: block;
    flex-grow: 1;
    background-color: inherit;
    border: 0;
    ${({ theme }) => theme.typography.body2};
    color: ${({ theme }) => theme.colors.text.idle};
    flex: 1 1;
  }
`;

const ShareButton = styled(Button)`
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.colors.primary.light};
`;

export default RightButton;
