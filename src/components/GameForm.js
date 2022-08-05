import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { Circle, XLg } from "react-bootstrap-icons";

export const GameForm = () => {
  return (
    <Container className="text-center form-container">
      <Row>
        <Form className="mt-5">
          <Form.Group className="mb-3 w-50 m-auto" controlId="formBasicEmail">
            <Form.Label>
              Jugador <XLg></XLg>
            </Form.Label>
            <Form.Control type="text" placeholder="Nombre 1" />
          </Form.Group>
          <Form.Group className="mb-3 w-50 m-auto" controlId="formBasicEmail">
            <Form.Label>
              Jugador <Circle></Circle>
            </Form.Label>
            <Form.Control type="text" placeholder="Nombre 2" />
          </Form.Group>
          <Button className="mx-2" variant="success" type="submit">
            Nuevo Juego
          </Button>
          <Button className="mx-2" variant="info" type="submit">
            Reiniciar
          </Button>
        </Form>
      </Row>
    </Container>
  );
};
