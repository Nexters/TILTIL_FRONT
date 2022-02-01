import { ROUTE } from 'constants/route';

import { ArrowLeft } from 'assets';
import { useRouter } from 'next/router';

import { HeaderProps } from './constants';

const LeftHeader: React.VFC<HeaderProps> = ({ pathname, asPath }) => {
  switch (pathname) {
    case ROUTE.login:
    case ROUTE.main:
    case ROUTE.main_login:
      return <></>;

    case ROUTE.records_detail:
      if (/abc/.test(asPath)) {
        // TODO: 오늘의 암묵지 읽을 때 예외처리
        return <></>;
      }
      return <BtnBack />;

    default:
      return <BtnBack />;
  }
};

const BtnBack: React.VFC = () => {
  const router = useRouter();

  const handleBack = () => router.back();

  return (
    <button type="button" onClick={handleBack}>
      <ArrowLeft />
    </button>
  );
};

export default LeftHeader;
