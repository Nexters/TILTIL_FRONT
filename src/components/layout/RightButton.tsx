import { ROUTE } from 'constants/route';

import { Dialog } from 'components/dialog/Dialog';
import { DialogContent, DialogDescription, DialogTitle } from 'components/dialog/DialogConfirm';
import { DialogTemplate } from 'components/dialog/DialogTemplate';
import { Icon, RightButtonIconName } from 'components/icon/Icon';
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
  const router = useRouter();
  const dialog = useDialogStore();

  const rightButtonHandlers = useMemo(
    () => ({
      user: () => router.push(ROUTE.my),
      share: () => {
        dialog.open(<ShareDialog />);
      },
      more: () => {},
      cancel: () => {},
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
