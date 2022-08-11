import React, { useEffect, useState } from "react";
import axios from "axios";
import BoardMemorama from "./components/BoardMemorama";
import { Container } from "react-bootstrap";
import "./styles/App.css";
import CardsMemorama from "./components/CardsMemorama";

function App() {
  const URL =
    "https://api.unsplash.com/search/photos?client_id=GS9NJjBSqA2w3ak6AOHAIYWDNDCcjQQwPtLNtUNswqY&query=kitten&color=black_and_white";

  const [response, setResponse] = useState([]);

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
      setResponse(urlArray);
      console.log(urlArray);
    };
    getPhotosData();
  }, []);

  return (
    <Container>
      <div className="titulo">MEMORAMA</div>
      <BoardMemorama className="my-4"></BoardMemorama>
      <CardsMemorama imagen={response}></CardsMemorama>
    </Container>
  );
}

export default App;
