import React from "react";
import { Col } from "react-bootstrap";

function BoxGame() {
  return (
    <Col
      className="border d-flex align-items-center col-4"
      style={{ height: "50px" }}
    >
      <span className="d-flex mx-auto justify-content-center">1</span>
    </Col>
  );
}

export default BoxGame;
