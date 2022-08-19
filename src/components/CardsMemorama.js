import { useEffect, useState } from "react";
import { Container, Row, Toast, ToastContainer } from "react-bootstrap";
import Box from "./Box";

/**
 *
 * @param {Object[]} urls - array de urls ya duplicadas y ordenadas.
 * @returns Componente de react con las casillas del memorama
 */
function CardsMemorama({ urls, verificadas, toBeCompare, setToBeCompare}) {
   const [mostrarAlerta, setMostrarModal] = useState(false);

  //Cada vez que cambie mi arreglo por comparar,
  //ejecuto lo que esta adentro del useEffect

  const mostrarModal = () => {
    if (verificadas.length == 20) {
      setMostrarModal(true);
      console.log('AQUI TOY')
    } else {
      setMostrarModal(false);
    }
  };
  useEffect(mostrarModal, [verificadas]);
  return (
    <Container className="text-center board-container">
      <Row className="center">
        {urls.map((url, index) => {
          return (
            <Box
              verificadas={verificadas}
              showArray={toBeCompare}
              click={setToBeCompare}
              indice={index}
              imagen={url}
            ></Box>
          );
        })}
      </Row>
      {
      mostrarAlerta === true ?<ToastContainer position={'top-center'}> <Toast
      className="d-inline-block m-1"
      bg={'Warning'.toLowerCase()}
      key={1}
      
    >
      <Toast.Header>
        <img
          src="holder.js/20x20?text=%20"
          className="rounded me-2"
          alt=""
        />
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body className={'Warning' === 'Dark' && 'text-white'}>
        Felicidades haz ganado!!!.
      </Toast.Body>
    </Toast></ToastContainer>: null
      }
    </Container>
  );
}

export default CardsMemorama;
