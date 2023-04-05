import { useContext } from "react";
import { useEffect, useState } from "react";
import { AppContext } from "../App";

function GameBoard() {
  const [point, setPoint] = useState(5);
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 100));
  const [choiceNum, setChoiceNum] = useState();
  const [hint, setHint] = useState("0~100 사이의 숫자를 맞춰보세요!");
  const { myPoint, setMyPoint } = useContext(AppContext);

  const onChangeChoice = (e) => {
    setChoiceNum(e.target.value);
  };

  const onClickCheck = (e) => {
    e.preventDefault();
    let checkNum = parseInt(choiceNum);

    if (isNaN(checkNum)) {
      setHint("숫자를 입력해주세요!");
      setChoiceNum("");
      return;
    }

    if (checkNum < 0 || checkNum >= 100) {
      setHint("숫자를 잘못 입력하셨습니다!");
      setChoiceNum("");
      return;
    }

    if (checkNum < randomNum) {
      setHint("Up!");
      setPoint(point - 1);
      setChoiceNum("");
    } else if (checkNum > randomNum) {
      setHint("Down!");
      setPoint(point - 1);
      setChoiceNum("");
    } else {
      setHint("정답입니다! 랜덤 값을 초기화합니다");

      if (point > 0) {
        localStorage.setItem("point", parseInt(myPoint) + point);

        setMyPoint(localStorage.getItem("point"));
      }
      setChoiceNum("");
      setRandomNum(Math.floor(Math.random() * 100));
      setPoint(5);
    }
  };

  useEffect(() => console.log(`랜덤 숫자는 ${randomNum}입니다.`), [randomNum]);
  useEffect(
    () => console.log(`유저가 선택한 숫자는${choiceNum}입니다`),
    [choiceNum]
  );
  useEffect(() => console.log(`현재 포인트: ${point}`), [point]);

  return (
    <div className="w-full grow flex flex-col justify-center items-center">
      <div className="mb-4 text-xl font-bold">{hint}</div>
      <div>
        <form onSubmit={onClickCheck}>
          <input
            className="border-2 rounded-lg px-4 py-2 focus:outline-pink-300 shadow-lg"
            type="text"
            value={choiceNum}
            onChange={onChangeChoice}
          />
          {/* <button
            onClick={onClickCheck}
            className="px-4 py-2 ml-2 rounded-lg border-2 border-pink-300 text-pink-300 shadow-lg"
          >
            확인
          </button> */}
          <input
            className="px-4 py-2 ml-2 rounded-lg border-2 border-pink-300 text-pink-300 shadow-lg cursor-pointer"
            type="submit"
            value="확인"
          />
        </form>
      </div>
    </div>
  );
}

export default GameBoard;