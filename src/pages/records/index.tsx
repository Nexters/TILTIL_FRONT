import styled from '@emotion/styled';
import Header from 'components/layout/Header';
import EmptyList from 'components/records/EmptyList';
import TILItem from 'components/records/TILItem';
import React from 'react';
import { Main, PageWrapper } from 'styles/styled';
import media from 'utils/media';

const RecordsPage = () => {
  return (
    <PageWrapper background="default">
      <Header title="나의 암묵지" leftButton="home" background="default" />

      <RecordsMain className="pt-5">
        {/* TODO: 암묵지 없을 때 pt 없음 */}
        {/* <EmptyList /> */}

        <Section>
          <Date>2022년 2월</Date>
          <TILList>
            {Array(4)
              .fill(1)
              .map((_, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <li key={index}>
                  <TILItem />
                </li>
              ))}
          </TILList>
        </Section>

        <Section>
          <Date>2022년 3월</Date>
          <TILList>
            {Array(4)
              .fill(1)
              .map((_, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <li key={index}>
                  <TILItem dimmed />
                </li>
              ))}
          </TILList>
        </Section>
      </RecordsMain>
    </PageWrapper>
  );
};

const RecordsMain = styled(Main)`
  display: flex;
  flex-direction: column;
`;

const Section = styled.section`
  margin-bottom: 44px;
  ${media.mobile} {
    margin-bottom: 32px;
  }
`;

const TILList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(264px, 1fr));
  gap: 24px;

  ${media.mobile} {
    grid-template-columns: repeat(3, 1fr)
    gap: 16px;
  }
`;

const Date = styled.h2`
  ${({ theme: { typography } }) => typography.listMenu}
  margin-bottom: 12px;
`;

export default RecordsPage;
