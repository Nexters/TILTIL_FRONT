import type { NextPage } from "next";
import { dehydrate, QueryClient, useQuery } from "react-query";

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
  const { data } = useQuery("");

  return <div>메인</div>;
};

export default Home;
