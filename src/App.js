import React, { useEffect, useState } from "react";
import CardsMemorama from "./components/CardsMemorama";
import BoardMemorama from "./components/BoardMemorama";
import { Container } from "react-bootstrap";
import { getPhotosData } from "./utilities/helpers";
import "./styles/App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("gatitos");
  const [response, setResponse] = useState([]); //arreglo url ya formateadas

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
      <BoardMemorama change={setSearchTerm} className="my-4"></BoardMemorama>
      <CardsMemorama urls={response}></CardsMemorama>
    </Container>
  );
}

export default App;
