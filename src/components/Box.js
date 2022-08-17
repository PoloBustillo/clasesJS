import React, { useState } from "react";
import { Col, Image } from "react-bootstrap";

function Box({ imagen, click, indice, showArray }) {
  
  const [active, setActive] = useState(false);
  return (
    <Col
      onClick={(evento) => {
        let newArray = [...showArray];
        if (newArray.length <2) {newArray.push(indice);
          setActive(true)
        click(newArray);
        console.log(indice);} 
        //guardar el nuevo estado si showArray.leght < 2
        //sino es mayor o igual que 2, entonces verifica
        
      }}
      className="col-4 col-sm-3 image-container flip-card"
    >
      <div class={active?"flip-card-inner active": "flip-card-inner"}> 
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
