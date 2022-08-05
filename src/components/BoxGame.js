import React from "react";
import { Col } from "react-bootstrap";

function BoxGame(props) {
  //function
  function addSelection() {
    console.log("CLICK");
  }
  //arrow function
  let addSelection2 = () => {
    console.log("CLICK 2");
  };

  return (
    <Col
      onClick={addSelection2}
      className="border col-4 border-pink box-container"
      style={{ height: "80px" }} //TRATAR DE EVITAR
    >
      <div className="center">
        <span className="purple">{props.selection}</span>
        <div className="purple">{props.index}</div>
      </div>
    </Col>
  );
}

export default BoxGame;
