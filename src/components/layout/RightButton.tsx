import { Icon, RightButtonIconName } from 'components/icon/Icon';
import React, { useMemo } from 'react';

interface Props {
  button: RightButtonIconName;
}

const RightButton: React.VFC<Props> = ({ button }) => {
  const rightButtonHandlers = useMemo(
    () => ({
      user: () => {},
      share: () => {},
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
