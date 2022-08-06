import React, { useState } from "react";
import { Row, Container } from "react-bootstrap";
import { Circle, XLg } from "react-bootstrap-icons";
import BoxGame from "./BoxGame";

function Board() {
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

  let currentPlayer = "O";
  //Crear nuevo arreglo usando el anterior
  let newStateArray = gameState.map((value, position) => {
    return (
      <BoxGame key={position} selection={value} index={position}></BoxGame>
    );
  });

  //Dibujar nuevo arreglo en consola
  console.log(newStateArray);

  return (
    <Container className="text-center board-container">
      <Row className="center">
        {newStateArray}
        <span className="mt-5">
          Turno:{" "}
          {currentPlayer === "O" ? (
            <Circle color="purple"></Circle>
          ) : currentPlayer === "X" ? (
            <XLg color="purple"></XLg>
          ) : (
            <span></span>
          )}
        </span>
      </Row>
    </Container>
  );
}

export default Board;
