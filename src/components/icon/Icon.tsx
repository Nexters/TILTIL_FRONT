import styled from '@emotion/styled';
import {
  ArrowLeftIcon,
  CancelIcon,
  CheckIcon,
  ComfortableIcon,
  DeleteIcon,
  EasyWriteIcon,
  HomeIcon,
  IceCubesIcon,
  LogoIcon,
  MoreIcon,
  ShareIcon,
  ThumbUpIcon,
  TogetherIcon,
  UserIcon,
  CloudWithMountainD,
  CloudWithMountainM,
  Info,
} from 'assets/svgs';
import EditIcon from 'assets/svgs/EditIcon';
import React, { VFC } from 'react';

export type IconName = keyof typeof ICONS;

// header icon type
export type LeftButtonIconName = 'home';
export type RightButtonIconName = 'user' | 'share' | 'more' | 'cancel' | 'edit';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
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
  check: CheckIcon,
  delete: DeleteIcon,
  edit: EditIcon,
  cloudWithMountainD: CloudWithMountainD,
  cloudWithMountainM: CloudWithMountainM,
  info: Info,
} as const;

export const Icon: VFC<IconProps> = ({ name, className, ...rest }) => {
  // return React.createElement(ICONS[name]);
  return <Wrap className={className}>{React.createElement(ICONS[name], rest)}</Wrap>;
};

const Wrap = styled.div`
  display: flex;
`;
