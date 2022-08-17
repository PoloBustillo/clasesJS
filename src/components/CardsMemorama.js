import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Box from "./Box";

/**
 *
 * @param {Object[]} urls - array de urls ya duplicadas y ordenadas.
 * @returns Componente de react con las casillas del memorama
 */
function CardsMemorama({ urls }) {
  const [descubSinVerif, setDescubSinVerif] = useState([]);
  const [verificadas, setVerificadas] = useState([]);

function verify() {
  if (urls[descubSinVerif[0]] === urls[descubSinVerif[1]]) {
    console.log('son iguales');
  }else{
    console.log('son diferentes');
  }
}
  return (
    <Container className="text-center board-container">
      <Row className="center">
        {urls.map((url, index) => {
          return (
            <Box
              showArray={descubSinVerif}
              click={setDescubSinVerif}
              indice={index}
              imagen={url}
              verify={verify}
            ></Box>
          );
        })}
      </Row>
    </Container>
    
  );
}

export default CardsMemorama;
