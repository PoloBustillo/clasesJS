import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <>
      MEMORAMA
      <img src={response[0]}></img>
      <img src={response[1]}></img>
      <img src={response[2]}></img>
      <img src={response[3]}></img>
      <img src={response[4]}></img>
      <img src={response[5]}></img>
      <img src={response[6]}></img>
      <img src={response[7]}></img>
      <img src={response[8]}></img>
      <img src={response[9]}></img>
    </>
  );
}

export default App;
