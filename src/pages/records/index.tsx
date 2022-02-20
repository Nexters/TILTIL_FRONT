import styled from '@emotion/styled';
import { TilSimpleResponse } from 'apis/api';
import { useMyTils } from 'apis/til';
import { useFetchMe } from 'apis/users';
import Header from 'components/layout/Header';
import EmptyList from 'components/records/EmptyList';
import TILItem from 'components/records/TILItem';
import Link from 'next/link';
import React, { Fragment, useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import { Main, PageWrapper } from 'styles/styled';
import media from 'utils/media';

const [PC_TILS_LOADING_CNT, MW_TILS_LOADING_CNT] = [20, 10];

const RecordsPage: React.VFC = () => {
  const { ref, inView } = useInView({
    delay: 200,
  });

  const me = useFetchMe();

  const { data, isFetchingNextPage, isSuccess, isLoading, hasNextPage, fetchNextPage } = useMyTils(PC_TILS_LOADING_CNT);

  // pages data --> til[] 변환
  const tilList = useMemo(() => {
    const result = [] as TilSimpleResponse[];
    data?.pages.forEach((page) => page.tils?.forEach((til) => result.push(til)));

    return result;
  }, [data?.pages.length]);

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <PageWrapper background="default">
      <Header title="나의 암묵지" leftButton="home" background="default" rightButton={['edit']} me={me?.data} />

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
                  const [, prevMonth] = tilList[index - 1]?.date?.split('-') || [];
                  const [nextYear, nextMonth] = til.date?.split('-') || [];

                  const showMonth = prevMonth !== nextMonth; // month 변화가 있을 때 표시

                  return (
                    <Fragment key={til.id}>
                      {showMonth && <Date>{`${nextYear}년 ${Number(nextMonth)}월`}</Date>}
                      <Link href={`/records/${til.id}`}>
                        <li>
                          <TILItem {...til} />
                        </li>
                      </Link>
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
  }

  ${media.mobile} {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 16px;
  }
`;

const Date = styled.li`
  ${({ theme: { typography } }) => typography.listMenu}
  margin: 20px 0 12px;

  grid-column-start: 1;
  grid-column-end: 3;

  ${media.mobile} {
    grid-column-end: 1;
  }
`;

export default RecordsPage;
