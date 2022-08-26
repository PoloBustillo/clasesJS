import React from "react";

function FuncionSumar() {
  function sumar(numero, numero2, numero3) {
    let sumaEsto = numero + numero2 + numero3;
    return sumaEsto;
  }
  //asginar el return de la funcion a una variable
  let suma = sumar(10, 9, 8);

  return (
    <div>
      <h1>{suma}</h1>
      <h1>{sumar(1, 2, 3)}</h1>
      <h1>{sumar(11, 22, 44)}</h1>
      <h1>{sumar("Hola ", "Mundo ", "A Todos")}</h1>
    </div>
  );
}

export default FuncionSumar;
