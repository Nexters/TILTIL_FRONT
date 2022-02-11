import Button from 'components/Button';
import { Icon } from 'components/icon/Icon';
import InfiniteSlider from 'components/InfiniteSlider';
import type { NextPage } from 'next';
import React from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { tilState } from 'states/til';
import { PageWrapper } from 'styles/styled';

// export async function getStaticProps() {
//   const queryClient = new QueryClient()
//   await queryClient.prefetchQuery('posts', getPosts)

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   }
// }

const Home: NextPage = () => {
  const [pageName, setPageName] = useRecoilState(tilState);
  const { data } = useQuery('');

  return (
    <PageWrapper>
      <InfiniteSlider duration={16}>
        {React.Children.toArray(
          Array.from({ length: 5 }).map(() => {
            // eslint-disable-next-line react/jsx-key
            return <Icon name="iceCubes" />;
          })
        )}
      </InfiniteSlider>
      <main>
        비로그인 메인
        <Button disabled fullWidth>
          오늘의 암묵지 쌓기
        </Button>
      </main>
    </PageWrapper>
  );
};

export default Home;
