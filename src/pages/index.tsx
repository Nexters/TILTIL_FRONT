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
    <button
      type="button"
      onClick={() => {
        setPageName('recoil 연결');
      }}
    >
      할일 : {pageName}
    </button>
  );
};

export default Home;
