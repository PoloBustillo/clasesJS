import React, { useEffect, useState } from "react";
import axios from "axios";
import BoardMemorama from "./components/BoardMemorama";
import { Container } from "react-bootstrap";
import "./styles/App.css";
import CardsMemorama from "./components/CardsMemorama";
import { random } from "./utilities/helpers";

function App() {
  const [searchTerm, setSearchTerm] = useState("gatitos");
  const URL =
    "https://api.unsplash.com/search/photos?client_id=GS9NJjBSqA2w3ak6AOHAIYWDNDCcjQQwPtLNtUNswqY&query=" +
    searchTerm;
  const [response, setResponse] = useState([]); //arreglo url ya formateadas

  useEffect(() => {
    //llamadas a servicios
    //info de mi perfil
    //info de mis blogs
    //imagenes...
    let getPhotosData = async () => {
      let photosResponse = await axios({
        method: "get",
        url: URL,
      });

      let urlArray = photosResponse.data.results.map((photoData) => {
        return photoData.urls.thumb;
      });
      let newArrayConcat = urlArray.concat(urlArray);
      let newArraySort = newArrayConcat.sort(random);
      setResponse(newArraySort);
    };
    getPhotosData();
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
