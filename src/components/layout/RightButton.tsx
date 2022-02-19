import { useTilDeleteMutation } from 'apis/til';
import { Dialog } from 'components/dialog/Dialog';
import { DialogBottom } from 'components/dialog/DialogBottom';
import { DialogConfirm, DialogContent, DialogDescription, DialogTitle } from 'components/dialog/DialogConfirm';
import { Icon, RightButtonIconName } from 'components/icon/Icon';
import { Text } from 'components/Text';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import { useDialogStore } from 'states/dialogStore';

interface Props {
  button: RightButtonIconName;
}

const ShareDialog: React.VFC = () => (
  <Dialog
    message=""
    RenderContent={() => (
      <DialogContent>
        <DialogTitle>나의 암묵지를 공유해봐요!</DialogTitle>
        <DialogDescription>열심히 키운 나의 암묵지를 자랑하고 친구들과 함께 성장해봐요!</DialogDescription>
      </DialogContent>
    )}
  />
);

const RightButton: React.VFC<Props> = ({ button }) => {
  const { open } = useDialogStore();
  const { query, replace, push } = useRouter();
  const { mutateAsync: deleteTil } = useTilDeleteMutation();
  const recordId = Number(query?.recordId) || 0;
  const rightButtonHandlers = useMemo(
    () => ({
      user: () => {},
      share: () => {
        open(<ShareDialog />);
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
                  <Link href={`/records/${recordId}?type=modify`}>
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
      cancel: () => {},
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

export default RightButton;
