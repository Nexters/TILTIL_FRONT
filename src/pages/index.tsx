import Button from 'components/Button';
import Layout from 'components/layout/Layout';
import type { NextPage } from 'next';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { tilState } from 'states/til';

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
    <Layout>
      <Button disabled fullWidth>
        오늘의 암묵지 쌓기
      </Button>
    </Layout>
  );
};

export default Home;
