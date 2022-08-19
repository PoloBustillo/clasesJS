import React, { useEffect, useState } from "react";
import CardsMemorama from "./components/CardsMemorama";
import BoardMemorama from "./components/BoardMemorama";
import { Container } from "react-bootstrap";
import { getPhotosData } from "./utilities/helpers";
import "./styles/App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("gatitos");
  const [response, setResponse] = useState([]); //arreglo url ya formateadas
   const [toBeCompare, setToBeCompare] = useState([]);
  const [verificadas, setVerificadas] = useState([]);

  function resetGame() {
    setVerificadas([]) 
    setToBeCompare([]) 
console.log("cartas")
     }

  useEffect(verify, [toBeCompare]); //arreglo de dependencias

  function verify() {
    //si no son dos no hagas nada
    if (toBeCompare.length === 2) {
      //comparo dos urls, usando mi arreglo toBeCompare como indices, ejemplo:
      //toBeCompare : [10,15]
      //urls(20) : ['http://kakskdas'......]
      //url[10] === url[15]
      if (response[toBeCompare[0]] === response[toBeCompare[1]]) {
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

  useEffect(() => {
    (async () => {
      //API
      //ACTUALIZAR OTROS ESTADOS
      let arrayUrls = await getPhotosData(searchTerm);
      setResponse(arrayUrls);
    })();
  }, [searchTerm]);

  return (
    <Container>
      <div className="titulo">MEMORAMA</div>
      <BoardMemorama resetGame={resetGame} change={setSearchTerm} className="my-4"></BoardMemorama>
      <CardsMemorama verificadas={verificadas}
      toBeCompare={toBeCompare}
      urls={response}
      setToBeCompare={setToBeCompare}></CardsMemorama>
        </Container>
  );
}

export default App;
