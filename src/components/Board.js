import React, { useEffect, useState } from "react";
import { Row, Container } from "react-bootstrap";
import { Circle, XLg } from "react-bootstrap-icons";
import BoxGame from "./BoxGame";

function Board({ firstPlayerFromProps, secondPlayerFromProps, newGame }) {
  const [currentPlayer, setCurrentPlayer] = useState(firstPlayerFromProps);
  const [someoneWin, setSomeoneWin] = useState([]);
  let iconCurrentPlayer = currentPlayer === firstPlayerFromProps ? "X" : "O";
  const [gameState, setGameState] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  let checkWinner = () => {
    let winnerCombinations = [
      [0, 1, 2], //iteracion 1
      [3, 4, 5], //iteracion 2
      [6, 7, 8], //...
      [0, 4, 8], //...
      [2, 4, 6],
      [2, 5, 8],
      [0, 3, 6],
      [1, 4, 7],
    ];

    let filteredArray = winnerCombinations.filter((positonsArray) => {
      return (
        //que sean diferente de nulo
        gameState[positonsArray[0]] !== null && //iteracion2 -> 3, gameState[3]
        gameState[positonsArray[1]] !== null && //iteracion2 -> 4, gameState[4]
        gameState[positonsArray[2]] !== null && //iteracion2 -> 5, gameState[5]
        //checo que valores sean iguales
        gameState[positonsArray[0]] === gameState[positonsArray[1]] &&
        gameState[positonsArray[0]] === gameState[positonsArray[2]]
      );
    });

    console.log(filteredArray);
    setSomeoneWin(filteredArray);
  };

  let modifyGame = (position) => {
    if (newGame && someoneWin.length === 0) {
      let newGameState = [...gameState];
      if (newGameState[position] == null) {
        newGameState[position] = iconCurrentPlayer;
        setGameState(newGameState);

        //LOGICA DE IMPRIMIR
        if (someoneWin.length === 0) {
          if (currentPlayer == firstPlayerFromProps) {
            setCurrentPlayer(secondPlayerFromProps);
          } else {
            setCurrentPlayer(firstPlayerFromProps);
          }
        }
      }
    }
  };

  let newStateArray = gameState.map((value, position) => {
    return (
      <BoxGame
        key={position}
        selection={value}
        index={position}
        isWinnerBox={someoneWin[0]?.includes(position)}
        modifyGame={modifyGame}
      ></BoxGame>
    );
  });

  useEffect(() => {
    checkWinner();
  }, [gameState]);

  useEffect(() => {
    //CALCULAR NUESTRO CURRENT PLAYER
    setCurrentPlayer(firstPlayerFromProps);
    if (!newGame) {
      setGameState([null, null, null, null, null, null, null, null, null]);
    }
    //Crear nuevo arreglo usando el anterior
  }, [firstPlayerFromProps, newGame]);

  return (
    <Container className="text-center board-container">
      <Row className="center">
        {newStateArray}
        {someoneWin.length === 0 ? (
          <span className="mt-5">
            Turno:{" "}
            {iconCurrentPlayer === "O" ? (
              <div>
                {currentPlayer} <Circle color="purple"></Circle>
              </div>
            ) : iconCurrentPlayer === "X" ? (
              <div>
                {currentPlayer} <XLg color="purple"></XLg>
              </div>
            ) : (
              <span></span>
            )}
          </span>
        ) : (
          <span className="mt-5">
            GANADOR:{" "}
            {currentPlayer === firstPlayerFromProps
              ? secondPlayerFromProps
              : firstPlayerFromProps}{" "}
          </span>
        )}
      </Row>
    </Container>
  );
}

export default Board;
