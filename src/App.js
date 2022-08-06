import React from "react";
import Board from "./components/Board";
import { GameForm } from "./components/GameForm";
import "./styles/App.css";

function App() {
  return (
    <>
      <GameForm></GameForm>
      <Board></Board>
    </>
  );
}

export default App;
