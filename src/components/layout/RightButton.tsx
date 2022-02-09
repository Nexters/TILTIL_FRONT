import { Icon, IconName } from 'components/icon/Icon';
import React from 'react';

interface Props {
  button: IconName;
}

const RightButton: React.VFC<Props> = ({ button }) => {
  const handleRightButton = () => {};

  return (
    <button type="button" onClick={handleRightButton}>
      <Icon name={button} />
    </button>
  );
};

export default RightButton;
