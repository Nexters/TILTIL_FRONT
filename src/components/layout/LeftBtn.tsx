import { ROUTE } from 'constants/route';

import { ArrowLeft } from 'assets';
import { useRouter } from 'next/router';
import { PathProps } from 'types/common';

const LeftHeader: React.VFC<PathProps> = ({ pathname }) => {
  const router = useRouter();

  const handleBack = () => router.back();

  switch (pathname) {
    case ROUTE.login:
    case ROUTE.main:
    case ROUTE.main_login:
      return <></>;

    default:
      return (
        <button type="button" onClick={handleBack}>
          <ArrowLeft />
        </button>
      );
  }
};

export default LeftHeader;
