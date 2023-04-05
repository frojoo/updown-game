import { useContext } from "react";
import { AppContext } from "../App";

const point = localStorage.getItem("point") | 0;
// 콘솔창에서 스토리지를 지웠을때 초기에 바로 0이 나오도록 설정

function GameResult() {
  const { myPoint } = useContext(AppContext);
  return (
    <div className="bg-pink-300 w-full grow flex flex-col justify-center items-center text-white pb-8 shadow-pink-300 shadow-lg">
      <div className="text-8xl font-black">Up & Down</div>
      <div className="text-2xl">현재 점수 : {myPoint}</div>
    </div>
  );
}

export default GameResult;
