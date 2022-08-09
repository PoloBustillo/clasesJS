import React, { useState } from "react";
import Board from "./components/Board";
import { GameForm } from "./components/GameForm";
import "./styles/App.css";

function App() {
  const [firstPlayer, setFirstPlayer] = useState("");
  const [newGame, isNewGame] = useState(false);
  const [secondPlayer, setSecondPlayer] = useState("");

  return (
    <>
      <GameForm
        newGame={newGame}
        isNewGame={isNewGame}
        firstPlayerFromProps={firstPlayer}
        secondPlayerFromProps={secondPlayer}
        setFirstPlayerByParent={setFirstPlayer}
        setSecondPlayerByParent={setSecondPlayer}
      ></GameForm>
      <Board
        firstPlayerFromProps={firstPlayer}
        secondPlayerFromProps={secondPlayer}
        newGame={newGame}
      ></Board>
    </>
  );
}

export default App;
