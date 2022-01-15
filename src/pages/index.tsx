import type { NextPage } from "next"
import { useRecoilState } from "recoil";
import { tilState } from "states/til";

const Home: NextPage = () => {
  const [pageName, setPageName] = useRecoilState(tilState)

  return <div onClick={() => {setPageName('recoil 연결')}}>할일 : {pageName}</div>;
};

export default Home;
