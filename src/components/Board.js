import React from "react";
import { Row, Container, Button, Form } from "react-bootstrap";
import BoxGame from "./BoxGame";

function Board() {
  const stateArray = ["X", "O", "O", "X", "X", "O", null, "X", "O"];

  //Crear nuevo arreglo usando el anterior
  let newStateArray = stateArray.map((value, position) => {
    return <BoxGame selection={value} index={position}></BoxGame>;
  });

  //Dibujar nuevo arreglo en consola
  console.log(newStateArray);

  return (
    <Container className="text-center board-container">
      <Row className="center">{newStateArray}</Row>
    </Container>
  );
}

export default Board;
