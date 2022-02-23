import styled from '@emotion/styled';
import { TilLogResponse } from 'apis/api';
import { IceCubesIcon } from 'assets/svgs';
import { ZeroCommit } from 'assets/svgs/CountIcsIcon';
import Link from 'next/link';
import React from 'react';
import { useDialogStore } from 'states/dialogStore';
import theme from 'styles/theme';
import { PartialPick } from 'types/common';
import media from 'utils/media';

import ButtonSmall from './ButtonSmall';
import CalandarGrapth from './CalandarGrapth';
import { Dialog } from './dialog/Dialog';
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
  const { open } = useDialogStore();

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
          <button
            type="button"
            onClick={() =>
              open(
                <Dialog
                  message=""
                  RenderContent={() => (
                    <DialogContent>
                      <Text typography="body3" color={theme.colors.text.highlight} fontWeight={700}>
                        빙하 조각은 이렇게 채워져요!
                      </Text>
                      <CommitList>
                        <IceCubesIcon
                          width={180}
                          style={{
                            position: 'relative',
                            transform: 'translateX(7px)',
                          }}
                        />
                      </CommitList>
                      <Text typography="caption1" color={theme.colors.icon.idle} style={{ marginBottom: 12 }}>
                        암묵지를 쓸 때 많은 카테고리를 채울수록
                        <br />
                        빙하 조각 색상이 진해져요!
                      </Text>
                      <ZeroCommit stroke={theme.colors.ui.disabled} />
                      <Text typography="caption1" color={theme.colors.icon.idle} className="mt-1 mb-4">
                        쓰지 않은 날은 슬픈 표정의 빙하 조각이 추가돼요.
                      </Text>
                      <Text typography="body3" color={theme.colors.text.highlight} fontWeight={700} className="mb-1">
                        날짜 표시는 어떻게 되나요?
                      </Text>
                      <Text typography="caption1" color={theme.colors.icon.idle}>
                        첫 가입부터 30일까지 순차적으로 채워지고
                        <br />
                        30일이 초과되면 표시되는 날짜가 하루씩 밀려요.
                      </Text>
                    </DialogContent>
                  )}
                />
              )
            }
          >
            <Icon className="mr-half" name="info" />
          </button>
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

// Dialog
const DialogContent = styled.div`
  padding: 0 16px 24px;
`;
const CommitList = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 8px;
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
