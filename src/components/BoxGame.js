import React from "react";
import { Col } from "react-bootstrap";
import { Circle, XLg } from "react-bootstrap-icons";

function BoxGame(props) {
  //function
  function addSelection() {
    console.log(props.index);
  }
  //arrow function
  let addSelection2 = () => {
    console.log(props.index);
  };

  return (
    <Col
      onClick={addSelection2}
      className="border col-4 border-pink box-container"
      style={{ height: "80px" }} //TRATAR DE EVITAR
    >
      <div className="center-box">
        {props.selection === "O" ? (
          <Circle color="purple"></Circle>
        ) : props.selection === "X" ? (
          <XLg color="purple"></XLg>
        ) : (
          <span></span>
        )}
      </div>
    </Col>
  );
}

export default BoxGame;
