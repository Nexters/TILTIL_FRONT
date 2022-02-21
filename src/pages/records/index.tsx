import styled from '@emotion/styled';
import { TilSimpleResponse } from 'apis/api';
import { useMyTils } from 'apis/til';
import { useFetchMe } from 'apis/users';
import Header from 'components/layout/Header';
import EmptyList from 'components/records/EmptyList';
import TILItem from 'components/records/TILItem';
import dayjs from 'dayjs';
import useMediaQuery from 'hooks/useMediaQuery';
import Link from 'next/link';
import React, { Fragment, useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import { Main, PageWrapper } from 'styles/styled';
import theme from 'styles/theme';
import media from 'utils/media';

const [PC_TILS_LOADING_CNT, MW_TILS_LOADING_CNT] = [20, 10];

const RecordsPage: React.VFC = () => {
  const { ref, inView } = useInView({
    delay: 200,
  });

  const me = useFetchMe();
  const { isMatched: isMobile, isCheckedScreenSize } = useMediaQuery(`(max-width: ${theme.size.mobile}px)`);

  const { data, isLoading, isFetching, isSuccess, isFetchingNextPage, hasNextPage, fetchNextPage } = useMyTils(
    isMobile ? MW_TILS_LOADING_CNT : PC_TILS_LOADING_CNT,
    isCheckedScreenSize
  );

  // pages data --> til[] 변환
  const tilList = useMemo(() => {
    const result = [] as TilSimpleResponse[];
    data?.pages.forEach((page) => page.tils?.forEach((til) => result.push(til)));

    return result;
  }, [isFetching]);

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <PageWrapper background="default">
      <Header title="나의 암묵지" leftButton="home" background="default" rightButton={['edit']} />

      <RecordsMain padding="md">
        {(() => {
          if (isLoading) {
            return (
              <TILList className="mt-8">
                {Array(PC_TILS_LOADING_CNT)
                  .fill(1)
                  .map((_, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <li key={index}>
                      <TILItem dimmed />
                    </li>
                  ))}
              </TILList>
            );
          }

          if (isSuccess && !tilList.length) {
            return <EmptyList />;
          }

          return (
            <>
              <TILList>
                {tilList.map((til, index) => {
                  // YYYY.MM
                  const prevDate = tilList[index - 1]?.date?.slice(0, 7);
                  const currentDate = til.date?.slice(0, 7);

                  return (
                    <Fragment key={til.id}>
                      {prevDate !== currentDate && (
                        <Date>{`${dayjs(currentDate).year()}년 ${dayjs(currentDate).month() + 1}월`}</Date>
                      )}

                      <li>
                        <Link href={`/records/${til.id}`} passHref>
                          <a href="replace">
                            <TILItem {...til} />
                          </a>
                        </Link>
                      </li>
                    </Fragment>
                  );
                })}

                {isFetchingNextPage && (
                  <li>
                    <TILItem dimmed />
                  </li>
                )}
              </TILList>

              {/* Scroll Observer */}
              <div ref={ref} />
            </>
          );
        })()}
      </RecordsMain>
    </PageWrapper>
  );
};

const RecordsMain = styled(Main)`
  display: flex;
  flex-direction: column;
`;

const TILList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(264px, 1fr));
  column-gap: 24px;

  > li {
    margin-bottom: 24px;

    ${media.mobile} {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }

  ${media.mobile} {
    column-gap: 16px;
  }
`;

const Date = styled.li`
  ${({ theme: { typography } }) => typography.listMenu}
  margin: 20px 0 12px;

  grid-column-start: 1;
  grid-column-end: 3;

  ${media.mobile} {
    grid-column-end: 3;
  }
`;

export default RecordsPage;
