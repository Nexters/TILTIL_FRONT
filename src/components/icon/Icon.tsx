import {
  ArrowLeftIcon,
  CancelIcon,
  MoreIcon,
  ShareIcon,
  UserIcon,
  HomeIcon,
  LogoIcon,
  ThumbUpIcon,
  ComfortableIcon,
  EasyWriteIcon,
  TogetherIcon,
  IceCubesIcon,
} from 'assets/svgs';
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
  iceCubes: IceCubesIcon,
  logo: LogoIcon,
  thumbUpIcon: ThumbUpIcon,
  comfortableIcon: ComfortableIcon,
  easyWriteIcon: EasyWriteIcon,
  togetherIcon: TogetherIcon,
} as const;

export const Icon: VFC<IconProps> = ({ name }) => {
  return React.createElement(ICONS[name]);
};
