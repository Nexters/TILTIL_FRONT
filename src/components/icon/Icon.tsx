import { ArrowLeft, Cancel, More, Share, User, HomeIcon } from 'assets/svgs';
import React, { VFC } from 'react';

export type IconName = keyof typeof ICONS;
interface IconProps {
  name: IconName;
}

const ICONS = {
  home: HomeIcon,
  arrow: ArrowLeft,
  cancel: Cancel,
  more: More,
  share: Share,
  user: User,
} as const;

export const Icon: VFC<IconProps> = ({ name }) => {
  return React.createElement(ICONS[name]);
};
