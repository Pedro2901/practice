//Metodos de listas/vectores/arrays/etc



//.flat
//En JavaScript, el método flat() se utiliza para aplanar un array multidimensional,
// es decir, convierte un array anidado en un array unidimensional

const numbers = [[4, 5], [2, 1], [1], [7]]



console.log(numbers.flat()); 

//en caso que sea mayor la profundidad 
var arr2 = [1, 2, [3, 4, [5, 6]], 7, [8, 9]];
var arrAplanado=arr2.flat();
console.log(arrAplanado)
var arr2Aplanado = arr2.flat(2);
console.log(arr2Aplanado)

// .join()
// En JavaScript, el método join() se utiliza para unir 
//los elementos de un array en una cadena, separados por un separador especificado.
const numbers2 = [4, 5, 2, 1, 1, 7];



console.log(numbers2.join("-")); 

// .map()
//En JavaScript, el método map() se utiliza para crear un nuevo array a partir de otro array,
// aplicando una función a cada uno de sus elementos.
// array.map(función(elemento, índice, arreglo), thisArg);
//Este devolvera un nuevo array
// La función pasada como argumento a map() se ejecutará para cada elemento del array, 
// y se le pasará tres parámetros: el valor actual del elemento,
//  su índice en el array y el array original completo. 
const numberst = ["4", "5", "2", "1", "1", "7"];

const toNumber = (string) => +string;

console.log(numberst.map(toNumber)); 

var numeros = [1, 2, 3, 4, 5];
var numerosDobles = numeros.map(function(elemento) {
    return elemento * 2;
  });
console.log(numerosDobles)  


var personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 30 },
    { nombre: "Pedro", edad: 20 }
  ];

  
  var nombres = personas.map(function(persona) {
    return persona.nombre;
  });

  console.log(nombres)

//Crear un array de números del 1 al N:
  const N = 5;
  const numeross = Array(N).fill().map((_, index) => index + 1);
  console.log(numeross); // Resultado: [1, 2, 3, 4, 5]
  //Asignar un número de identificación único a cada elemento de un array:
  const frutas = ["manzana", "banana", "cereza"];
const frutasConID = frutas.map((fruta, index) => ({ id: index + 1, nombre: fruta }));
console.log(frutasConID);
/* Resultado:
[
  { id: 1, nombre: 'manzana' },
  { id: 2, nombre: 'banana' },
  { id: 3, nombre: 'cereza' }
]
*/

//Crear un nuevo array con números pares:
const numerosd = [1, 2, 3, 4, 5, 6];
const paresss = numerosd.map((_, index) => (index + 1) * 2);
console.log(paresss); // Resultado: [2, 4, 6, 8, 10, 12]

//Obtener la posición de cada elemento en un array de objetos:

const personasasd = [
  { nombre: "Juan" },
  { nombre: "María" },
  { nombre: "Carlos" },
];
const personasConPosicion = personasasd.map((persona, index) => ({ ...persona, posicion: index + 1 }));
console.log(personasConPosicion);
/* Resultado:
[
  { nombre: 'Juan', posicion: 1 },
  { nombre: 'María', posicion: 2 },
  { nombre: 'Carlos', posicion: 3 }
]
*/


  // .filter()
// filter() crea una nueva matriz a partir de una matriz 
//existente que solo contiene los elementos que cumplen cierta condición.
// array.filter(function(currentValue, index, arr), thisValue)

  const numberste = [4, 5, 2, 1, 1, 7];

const filterEven = (number) => !(number % 2);
//como el resultado del numero %2 es 0 entonces lo considera negativo por eso debemos invertirlo con ! (creo)

console.log(numberste.filter(filterEven)); // 


const numerosdd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = numerosdd.filter(function(numero) {
  return numero % 2 === 0;
});

//const numerosPares = numerosdd.filter((numero) =>
// numero % 2 === 0);

console.log(numerosPares); // [2, 4, 6, 8, 10]


const numerosss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Usamos filter para obtener solo los números pares
const numerosParess = numerosss.filter(numero => numero % 2 === 0);

// Usamos map para multiplicar los números pares por 2
const resultado = numerosParess.map(numero => numero * 2);

console.log(resultado); // Resultado: [4, 8, 12, 16, 20]


