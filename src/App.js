import React, { useEffect, useState } from "react";
import BoardMemorama from "./components/BoardMemorama";
import { Container } from "react-bootstrap";
import "./styles/App.css";
import CardsMemorama from "./components/CardsMemorama";
import { getPhotosData } from "./utilities/helpers";


function App() {
  const [searchTerm, setSearchTerm] = useState("gatitos");
  const [response, setResponse] = useState([]); //arreglo url ya formateadas

  useEffect(() => {
    //llamadas a servicios
    //info de mi perfil
    //info de mis blogs
    //imagenes...
    
    getPhotosData(setResponse, searchTerm);
    console.log(response);
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
