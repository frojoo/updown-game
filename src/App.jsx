import { useEffect } from "react";
import GameBoard from "./components/GameBoard";
import GameResult from "./components/GameResult";
import { createContext, useState } from "react";

export const AppContext = createContext();

function App() {
  const [myPoint, setMyPoint] = useState(localStorage.getItem("point") | 0);
  useEffect(() => {
    let savedPoint = localStorage.getItem("point");

    if (!savedPoint) {
      localStorage.setItem("point", 0);
    }
  }, []);

  return (
    <AppContext.Provider value={{ myPoint, setMyPoint }}>
      <div className=" flex flex-col justify-center items-center min-h-screen">
        <GameBoard />
        <GameResult />
      </div>
    </AppContext.Provider>
  );
}

export default App;
