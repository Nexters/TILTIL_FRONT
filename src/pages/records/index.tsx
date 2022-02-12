import styled from '@emotion/styled';
import Header from 'components/layout/Header';
import TILItem from 'components/records/TILItem';
import React from 'react';
import { PageWrapper } from 'styles/styled';
import media from 'utils/media';

const RecordsPage = () => {
  return (
    <PageWrapper background="default">
      <Header title="나의 암묵지" leftButton="home" background="default" />

      <Main className="pt-5">
        <Section>
          <Date>2022년 2월</Date>
          <TILList>
            <li>
              <TILItem />
            </li>
            <li>
              <TILItem />
            </li>
          </TILList>
        </Section>
      </Main>
    </PageWrapper>
  );
};

const Main = styled.main`
  padding: 0 ${({ theme: { padding } }) => padding.md}px;
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
    grid-template-columns: repeat(auto-fill, 1fr);
    gap: 16px;
  }
`;

const Date = styled.h2`
  ${({ theme: { typography } }) => typography.listMenu}
  margin-bottom: 12px;
`;

export default RecordsPage;
