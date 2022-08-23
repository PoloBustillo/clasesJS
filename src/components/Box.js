import React, { useEffect, useState } from "react";
import { Col, Image } from "react-bootstrap";

function Box({ imagen, click, indice, showArray, verificadas }) {
  const [active, setActive] = useState(false);
const [estiloGris, setEstiloGris] = useState(false);

  const activeOrDisable = () => {
    if (showArray.includes(indice) || verificadas.includes(indice)) {
      setActive(true);
    } else {
      setActive(false);
    }
  }
  useEffect(activeOrDisable, [showArray]);
  
  const convertirGris = () => {
    if (verificadas.includes(indice)) {
      setEstiloGris(true);
    } else {
      setEstiloGris(false);
    }
  }
  ;
  useEffect(convertirGris, [verificadas]);

  return (
    <Col
      onClick={() => {
        let newArray = [...showArray];
        if (newArray.length < 20) {
          newArray.push(indice);
          click(newArray);
        }
      }}
      className="col-4 col-sm-3 image-container flip-card"
    >
      <div className={active ? "flip-card-inner active" : "flip-card-inner"}>
        <div className="flip-card-front">
          <h1>?</h1>
        </div>
        <div className="flip-card-back">
          <Image src={imagen} className= {estiloGris ? "image estiloGris" : "image"}/>
        </div>
      </div>
    </Col>
  );
}

export default Box;
