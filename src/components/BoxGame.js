import React from "react";
import { Col } from "react-bootstrap";

function BoxGame() {
  return (
    <Col
      className="border col-4"
      style={{ height: "50px", position: "relative" }}
    >
      <span className="vertical-center">1</span>
    </Col>
  );
}

export default BoxGame;
