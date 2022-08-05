import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";

export const GameForm = () => {
  return (
    <Container className="text-center form-container">
      <Row>
        <Form className="mt-5">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Jugador 1</Form.Label>
            <Form.Control type="email" placeholder="Nombre 1" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Jugador 2</Form.Label>
            <Form.Control type="email" placeholder="Nombre 2" />
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
