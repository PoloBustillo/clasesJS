import React from "react";
import { Col } from "react-bootstrap";

function BoxGame() {
  return (
    <Col
<<<<<<< Updated upstream
      className="border col-4"
      style={{ height: "50px", position: "relative" }}
    >
      <span className="vertical-center">1</span>
=======
      className="border col-4 border-pink box-container"
      style={{ height: "80px" }} //TRATAR DE EVITAR
    >
      <span className="purple center">X</span>
>>>>>>> Stashed changes
    </Col>
  );
}

export default BoxGame;
