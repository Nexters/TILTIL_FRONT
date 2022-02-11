import Button from 'components/Button';
import type { NextPage } from 'next';
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
