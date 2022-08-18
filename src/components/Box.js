import React, { useEffect, useState } from "react";
import { Col, Image } from "react-bootstrap";

function Box({ imagen, click, indice, showArray, verificadas, setVerificadas }) {
    const [active, setActive] = useState(false);

  const activeOrDisable = () => {
    if (showArray.includes(indice)||verificadas.includes(indice)) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  useEffect(activeOrDisable, [showArray]);

  return (
    <Col
      onClick={() => {
        let newArray = [...showArray];
        if (newArray.length < 2) {
          newArray.push(indice);
          click(newArray);
        }
      }}
      className="col-4 col-sm-3 image-container flip-card"
    >
      <div class={active ? "flip-card-inner active" : "flip-card-inner"}>
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
