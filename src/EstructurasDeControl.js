import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

//App.js
function EstructurasDeControl() {
  let arreglo = ["Home", "Diseños", "Otros", "Contacto"];
  function saludarATodos() {
    return arreglo.map((nombre) => {
      return nombre == "Home" ? (
        <Nav.Link>Bienvenido {nombre}</Nav.Link>
      ) : (
        <Nav.Link>{nombre}</Nav.Link>
      );
    });
    //crear una funcion que me regrese un saludo para cada persona en el arreglo
    // si la persona soy yo que me regrese un mejor saludo
    // ["Super Hola Polo", "Hola Juanito", "Hola Mariel".....]
  }
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">{saludarATodos()}</Nav>
      </Container>
    </Navbar>
  );
}

export default EstructurasDeControl;
