import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Box from "./Box";

/**
 *
 * @param {Object[]} urls - array de urls ya duplicadas y ordenadas.
 * @returns Componente de react con las casillas del memorama
 */
function CardsMemorama({ urls }) {
  const [toBeCompare, setToBeCompare] = useState([]);
  const [verificadas, setVerificadas] = useState([]);

  //Cada vez que cambie mi arreglo por comparar,
  //ejecuto lo que esta adentro del useEffect
  useEffect(verify, [toBeCompare]); //arreglo de dependencias

  function verify() {
    //si no son dos no hagas nada
    if (toBeCompare.length === 2) {
      //comparo dos urls, usando mi arreglo toBeCompare como indices, ejemplo:
      //toBeCompare : [10,15]
      //urls(20) : ['http://kakskdas'......]
      //url[10] === url[15]
      if (urls[toBeCompare[0]] === urls[toBeCompare[1]]) {
        console.log("son iguales");
      } else {
        //espero un 1000ms y limpio arreglo toBeCompare
        setTimeout(() => {
          setToBeCompare([]);
        }, 1000);
      }
    }
  }
  return (
    <Container className="text-center board-container">
      <Row className="center">
        {urls.map((url, index) => {
          return (
            <Box
              showArray={toBeCompare}
              click={setToBeCompare}
              indice={index}
              imagen={url}
            ></Box>
          );
        })}
      </Row>
    </Container>
  );
}

export default CardsMemorama;
