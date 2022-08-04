import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import BoxGame from "./BoxGame";

function Board() {
  return (
    <Container className="vertical-center d-flex align-items-center text-center">
      <Row className="mx-6 d-flex mx-auto justify-content-center">
        {
          //CODIGO JS
          //ARREGLO DE (9 elementos)
          [0, 1, 2, 3, 4, 5, 6, 7, 8].map((indice) => {
            return <BoxGame></BoxGame>;
          })
        }
      </Row>
    </Container>
  );
}

export default Board;
