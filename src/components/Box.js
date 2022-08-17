import React from "react";
import { Col, Image } from "react-bootstrap";

function Box({ imagen, click, indice }) {
  return (
    <Col className="col-4 col-sm-3 image-container flip-card">
      <div class="flip-card-inner">
        <div onClick={(evento) => {
          click(indice)
          console.log(indice);
        }} className="flip-card-front" >
          <h1>?</h1>
        </div>
        <div className="flip-card-back">
          <Image src={imagen} className="image"></Image>
        </div>
      </div>
    </Col>
  );
}

export default Box;
