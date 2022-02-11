import { ArrowLeftIcon, CancelIcon, MoreIcon, ShareIcon, UserIcon, HomeIcon } from 'assets/svgs';
import React, { VFC } from 'react';

export type IconName = keyof typeof ICONS;

// header icon type
export type LeftButtonIconName = 'home';
export type RightButtonIconName = 'user' | 'share' | 'more' | 'cancel';

interface IconProps {
  name: IconName;
}

const ICONS = {
  home: HomeIcon,
  arrow: ArrowLeftIcon,
  cancel: CancelIcon,
  more: MoreIcon,
  share: ShareIcon,
  user: UserIcon,
} as const;

export const Icon: VFC<IconProps> = ({ name }) => {
  return React.createElement(ICONS[name]);
};
