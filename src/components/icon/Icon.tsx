import { ArrowLeft, Cancel, More, Share, User } from 'assets/svgs';
import React, { VFC } from 'react';

export type IconName = 'arrow' | 'cancel' | 'more' | 'share' | 'user';
interface IconProps {
  name: IconName;
}

const ICONS = {
  arrow: ArrowLeft,
  cancel: Cancel,
  more: More,
  share: Share,
  user: User,
};

export const Icon: VFC<IconProps> = ({ name }) => {
  return <>{ICONS[name]}</>;
};
