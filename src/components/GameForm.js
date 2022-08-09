import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { Circle, XLg } from "react-bootstrap-icons";

export const GameForm = ({
  firstPlayerFromProps,
  secondPlayerFromProps,
  setFirstPlayerByParent,
  setSecondPlayerByParent,
  isNewGame,
  newGame,
}) => {
  return (
    <Container className="text-center form-container">
      <Row>
        <Form className="mt-5">
          <Form.Group className="mb-3 w-50 m-auto" controlId="formBasicEmail">
            <Form.Label>
              Jugador {firstPlayerFromProps} <XLg></XLg>
            </Form.Label>
            <Form.Control
              disabled={newGame}
              type="text"
              placeholder="Nombre 1"
              onChange={(event) => {
                setFirstPlayerByParent(event.target.value);
              }}
              value={firstPlayerFromProps}
            />
          </Form.Group>
          <Form.Group className="mb-3 w-50 m-auto" controlId="formBasicEmail">
            <Form.Label>
              Jugador {secondPlayerFromProps} <Circle></Circle>
            </Form.Label>
            <Form.Control
              disabled={newGame}
              onChange={(event) => {
                setSecondPlayerByParent(event.target.value);
              }}
              type="text"
              placeholder="Nombre 2"
              value={secondPlayerFromProps}
            />
          </Form.Group>
          <Button
            className="mx-2"
            variant="success"
            onClick={() => {
              isNewGame(true);
            }}
            disabled={
              firstPlayerFromProps === "" ||
              secondPlayerFromProps === "" ||
              newGame
            }
          >
            Nuevo Juego
          </Button>
          <Button
            onClick={(event) => {
              isNewGame(false);
              setFirstPlayerByParent("");
              setSecondPlayerByParent("");
            }}
            className="mx-2"
            variant="info"
            disabled={!newGame}
          >
            Reset
          </Button>
        </Form>
      </Row>
    </Container>
  );
};
