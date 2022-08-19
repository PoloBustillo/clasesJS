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
  const [mostrarAlerta, setMostrarModal] = useState(false);

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
        let newVerificadas = [...verificadas];
        newVerificadas.push(toBeCompare[0]);
        newVerificadas.push(toBeCompare[1]);
        setVerificadas(newVerificadas);
        setToBeCompare([]);

        console.log("son iguales");
      } else {
        //espero un 1000ms y limpio arreglo toBeCompare
        setTimeout(() => {
          setToBeCompare([]);
        }, 500);
      }
    }
  }
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
