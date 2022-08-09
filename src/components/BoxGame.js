import React from "react";
import { Col } from "react-bootstrap";
import { Circle, XLg } from "react-bootstrap-icons";

function BoxGame(props) {
  return (
    <Col
      onClick={() => {
        console.log(props.index);
        props.modifyGame(props.index);
      }}
      className={
        props.isWinnerBox
          ? "border col-4 border-green box-container"
          : "border col-4 border-pink box-container"
      }
      style={{ height: "80px" }} //TRATAR DE EVITAR
    >
      <div className="center-box">
        {props.selection === "O" ? (
          <Circle
            fontWeight={"bold"}
            size={props.isWinnerBox ? 24 : 16}
            color={props.isWinnerBox ? "green" : "purple"}
          ></Circle>
        ) : props.selection === "X" ? (
          <XLg
            fontWeight={"bold"}
            size={props.isWinnerBox ? 24 : 16}
            color={props.isWinnerBox ? "green" : "purple"}
          ></XLg>
        ) : (
          <span></span>
        )}
      </div>
    </Col>
  );
}

export default BoxGame;
