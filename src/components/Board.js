import React from "react";
import { Row, Container } from "react-bootstrap";
import BoxGame from "./BoxGame";

function Board() {
  return (
<<<<<<< Updated upstream
    <Container className="container-vertical text-center">
      <Row className="mx-auto" style={{ width: "90%" }}>
        <label>Jugador 1:</label>
        <input></input>
        <label>Jugador 2:</label>
        <input></input>
      </Row>
      <Row className="vertical-center">
        <div>
          <h3>Turno: Jugador 1</h3>
        </div>
        {
          //CODIGO JS
          //ARREGLO DE (9 elementos)
          [0, 1, 2, 3, 4, 5, 6, 7, 8].map((indice) => {
            return <BoxGame></BoxGame>;
          })
        }
=======
    <Container className="text-center board-container">
      <Row className="center">
        <BoxGame></BoxGame>
        <BoxGame></BoxGame>
        <BoxGame></BoxGame>
        <BoxGame></BoxGame>
        <BoxGame></BoxGame>
        <BoxGame></BoxGame>
        <BoxGame></BoxGame>
        <BoxGame></BoxGame>
        <BoxGame></BoxGame>
>>>>>>> Stashed changes
      </Row>
    </Container>
  );
}

export default Board;
