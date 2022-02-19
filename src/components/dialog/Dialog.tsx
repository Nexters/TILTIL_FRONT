import React, { FC } from 'react';
import { PartialPick } from 'types/common';

import { DialogTemplate, DialogTemplateProps, useDialog, UseDialogProps } from './DialogTemplate';

export type DialogProps = Omit<PartialPick<DialogTemplateProps & UseDialogProps, 'message'>, 'show' | 'close'>;

export const Dialog: FC<DialogProps> = (props) => {
  const dialogProps = useDialog({ onClose: props.onClose });

  return <DialogTemplate {...props} {...dialogProps} />;
};
