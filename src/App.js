//TIPOS DE DATOS PRIMITIVOS

// let - limitada por el scope (bloque de codigo)
// var - se usa para identificar variables globales
// const - variable que solo se asigna su valor una solo vez

//let y var: variables que pueden cambiar su valor
let STRING_LET; //declaro variable - creo espacio en memoria
var STRING_VAR = "asignada en la declaracion"; //declaro variable - creo espacio en memoria

STRING_LET = 123; //asigno valor a variable
//sumar
STRING_LET = "reasignar valor";
//expresar el resultado con un string

//export: hacer visible elemento para los demas archivos
//const: variable constante (no cambia), es decir no puede ser reasignada
export const NULO = null;
export const INDEFINIDO = undefined;
export const STRING = "string";
export const NUMERO = 12345;
export const BIG_INT = 123451123010301203120302112031200321;
export const BOOLEANO = true;

//TIPOS DE ESTRUCTURAS

export const OBJETO_O_JSON = {
  identificador: "valor string",
  identificador2: 1234,
  identificador3: { id: { id: "otro" } },
  identificador4: [{}, {}],
  identificador5: () => {
    return "hola";
  },
  identificador6: STRING_LET,
};

let colorFav = "Rosa";

let miContacto = {
  nombre: "Mario",
  edad: 33,
  dir: { calle: "2 de Octubre", numero: 13, cp: 622132 },
  apellidos: ["primero", "segundo"],
  llamar: () => {
    console.log("llamando");
  },
  colorFavorito: colorFav,
};

//acceder a valores del objeto
let objeto = OBJETO_O_JSON.identificador3.id.id;

export const ARREGLO = [0, miContacto, "dato3", [12, 13], true, 5];

let indices = [1, 3];
let urls = ["qweoiqwie", "kqweiqwie", "qoweoqwe", "qwoeoqwe"];

urls[miContacto.dir.cp];
urls[indices[1]];

//acceder a valores del arreglo
let arreglo = ARREGLO[3][0];
console.log(arreglo);

///METODO
export function nombre(parametro, parametro2) {
  let suma = parametro + parametro2;
  return suma; //opcional
}

let mi_funcion = (parametro, parametro2) => {
  let resta = parametro - parametro2; // solo vive en el bloque de la funcion
  return resta; //opcional
};

let resultado_resta = mi_funcion();
nombre();

//Componente
export default function App() {
  return <h1>Hola Mundo</h1>;
}

//bloque
{
  let variable_bloque = 123;
}
