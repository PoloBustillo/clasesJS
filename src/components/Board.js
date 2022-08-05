import React from "react";
import { Row, Container } from "react-bootstrap";
import BoxGame from "./BoxGame";

function Board() {
  return (
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
      </Row>
    </Container>
  );
}

export default Board;
