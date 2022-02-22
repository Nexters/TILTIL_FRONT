import styled from '@emotion/styled';
import { TilLogResponse } from 'apis/api';
import Link from 'next/link';
import React from 'react';
import theme from 'styles/theme';
import { PartialPick } from 'types/common';
import media from 'utils/media';

import ButtonSmall from './ButtonSmall';
import CalandarGrapth from './CalandarGrapth';
import { Icon } from './icon/Icon';
import { Text } from './Text';

interface MontlyTilsProps {
  total: number;
  logs: TilLogResponse[];
  range: string;
  isMobile: boolean;
}

type Props = PartialPick<MontlyTilsProps, 'isMobile'>;

const MontlyLog = ({ total = 11, logs = dummy, isMobile }: Props) => {
  const startAt = logs[0].date;
  const endAt = logs[logs.length - 1].date;
  return (
    <>
      <MontlyTils className="mt-5">
        <MontlyTitle className="mb-3 mb-half">
          <Count>
            <Text className="mr-1 ml-half" typography="body6">
              지금까지 모은 빙하 조각
            </Text>
            <Text typography="h5" color={theme.colors.text.highlight}>
              {total} 개
            </Text>
          </Count>
          <Link href="/records" passHref>
            <ButtonSmall backgroundColor={['primary', 'extraLight']} textColor={['primary', 'light']}>
              리스트 보기
            </ButtonSmall>
          </Link>
        </MontlyTitle>
        <CalandarGrapth logs={logs} isMobile={isMobile} />
        <Note>
          <Icon className="mr-half" name="info" />
          <Text typography="caption1" color={theme.colors.text.placeholder}>
            {startAt} ~ {endAt}
          </Text>
        </Note>
      </MontlyTils>
    </>
  );
};

const MontlyTils = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 48px;

  ${media.mobile} {
    padding: 0px 24px;
  }
`;

const MontlyTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const Count = styled.div`
  display: flex;
  align-items: center;
`;
const Note = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export default MontlyLog;

const dummy = [
  {
    id: 1,
    count: 1,
    date: '2020-01-01',
  },
  {
    id: 2,
    count: 2,
  },
  {
    id: 3,
    count: 1,
  },
  {
    id: 4,
    count: 1,
  },
  {
    id: 5,
    count: 1,
  },
  {
    id: 6,
    count: 1,
  },
  {
    id: 7,
    count: 1,
  },
  {
    id: 8,
    count: 1,
  },
  {
    id: 9,
    count: 1,
  },
  {
    id: 10,
    count: 1,
  },
  {
    id: 11,
    count: 1,
  },
  {
    id: 12,
    count: 1,
  },
  {
    id: 13,
    count: 1,
  },
  {
    id: 14,
    count: 1,
  },
  {
    id: 15,
    count: 1,
  },
  {
    id: 16,
    count: 1,
  },
  {
    id: 17,
    count: 1,
  },
  {
    id: 18,
    count: 2,
  },
  {
    id: 19,
    count: 1,
  },
  {
    id: 20,
    count: 1,
  },
  {
    id: 21,
    count: 1,
  },
  {
    id: 22,
    count: 3,
  },
  {
    id: 23,
    count: 1,
  },
  {
    id: 24,
    count: 1,
  },
  {
    id: 25,
    count: 1,
  },
  {
    id: 26,
    count: 0,
  },
  {
    id: 27,
    count: 1,
  },
  {
    id: 28,
    count: 2,
  },
  {
    id: 29,
    count: 1,
  },
  {
    id: 30,
    count: 1,
    date: '2020-01-31',
  },
];
