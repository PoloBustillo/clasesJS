import React, { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { Circle, XLg } from "react-bootstrap-icons";

export const GameForm = () => {
  const [firstPlayer, setFirstPlayer] = useState("");
  const [secondPlayer, setSecondPlayer] = useState("");

  return (
    <Container className="text-center form-container">
      <Row>
        <Form className="mt-5">
          <Form.Group className="mb-3 w-50 m-auto" controlId="formBasicEmail">
            <Form.Label>
              Jugador {firstPlayer} <XLg></XLg>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre 1"
              onChange={(event) => {
                setFirstPlayer(event.target.value);
              }}
              value={firstPlayer}
            />
          </Form.Group>
          <Form.Group className="mb-3 w-50 m-auto" controlId="formBasicEmail">
            <Form.Label>
              Jugador {secondPlayer} <Circle></Circle>
            </Form.Label>
            <Form.Control
              onChange={(event) => {
                setSecondPlayer(event.target.value);
              }}
              type="text"
              placeholder="Nombre 2"
              value={secondPlayer}
            />
          </Form.Group>
          <Button
            className="mx-2"
            variant="success"
            disabled={firstPlayer === "" || secondPlayer === ""}
          >
            Nuevo Juego
          </Button>
        </Form>
      </Row>
    </Container>
  );
};
