import React from "react";
import { Col, Image } from "react-bootstrap";

function Box({ imagen, click, indice, showArray }) {
  return (
    <Col
      onClick={(evento) => {
        let newArray = [...showArray];
        //guardar el nuevo estado si showArray.leght < 2
        //sino es mayor o igual que 2, entonces verifica
        newArray.push(indice);
        click(newArray);
        console.log(indice);
      }}
      className="col-4 col-sm-3 image-container flip-card"
    >
      <div class="flip-card-inner">
        <div className="flip-card-front">
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
