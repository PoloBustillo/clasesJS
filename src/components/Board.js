import React from "react";
import { Row, Container } from "react-bootstrap";
import { Circle, XLg } from "react-bootstrap-icons";
import BoxGame from "./BoxGame";

function Board() {
  const stateArray = ["X", "O", "O", "X", "X", "O", null, "X", "O"];
  let player = "X";
  //Crear nuevo arreglo usando el anterior
  let newStateArray = stateArray.map((value, position) => {
    return <BoxGame selection={value} index={position}></BoxGame>;
  });

  //Dibujar nuevo arreglo en consola
  console.log(newStateArray);

  return (
    <Container className="text-center board-container">
      <Row className="center">
        {newStateArray}
        <span className="mt-5">
          Turno:{" "}
          {player === "O" ? (
            <Circle color="purple"></Circle>
          ) : (
            <XLg color="purple"></XLg>
          )}
        </span>
      </Row>
    </Container>
  );
}

export default Board;
