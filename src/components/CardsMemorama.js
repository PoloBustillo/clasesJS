import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
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
      {mostrarAlerta === true ? <span>WIN</span>: null
        }

    </Container>
  );
}

export default CardsMemorama;
