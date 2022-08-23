import React from "react";

function App() {
  //AQUI TRABAJEN
  // crear una funcion que reciba 3 numeros y me regrese la suma
function sumar(numero, numero2, numero3) {
  let sumaEsto = numero + numero2 + numero3;
  return sumaEsto; //opcional si no lo lleva devuelve un undefined
}
  //------------
  return <div>{/**llamar mi funcion aqui con valores 10,9,8 */sumar(10, 9, 8)}</div>;
}

export default App;
