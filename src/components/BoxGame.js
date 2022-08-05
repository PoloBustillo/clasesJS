import React from "react";
import { Col } from "react-bootstrap";

function BoxGame() {
  return (
    <Col
      className="border col-4 border-pink box-container"
      style={{ height: "80px" }} //TRATAR DE EVITAR
    >
      <span className="purple center">X</span>
    </Col>
  );
}

export default BoxGame;
