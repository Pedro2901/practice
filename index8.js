//revisarlo que me parece que esta malo los resultados que me plantea chatgpt 
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const resultado = numeros
  .map(numero => numero * 2) // Multiplicar todos los números por 2 primero
  .filter(numero => numero % 2 === 0); // Luego, filtrar los números pares

console.log(resultado); // Resultado: [4, 8, 12, 16, 20]



/*
Puedes convertir un objeto en un array en JavaScript utilizando varios enfoques
. Aquí te muestro tres métodos comunes:

Object.keys() y map(): Utiliza el método Object.keys() para obtener las claves 
del objeto como un array y luego utiliza map() para crear un nuevo array con los valores correspondientes. Por ejemplo:


*/
const objeto = { a: 1, b: 2, c: 3 };
const array = Object.keys(objeto).map(key => objeto[key]);
console.log(array); // Salida: [1, 2, 3]




/*
Object.values(): Utiliza el método Object.values() 
para obtener los valores del objeto como un array. Este enfoque es más directo si solo necesitas los valores:


*/
const objeto1 = { a: 1, b: 2, c: 3 };
const array1 = Object.values(objeto1);
console.log(typeof(array1))
console.log(array1); // Salida: [1, 2, 3]
array1.map((numero)=>{
    console.log(numero)
})




/*
Object.entries() y map(): Utiliza el método Object.entries() 
para obtener pares clave-valor como un array de arrays y luego 
utiliza map() para extraer los valores. Esto es útil si necesitas tanto las claves como los valores:


*/

const objeto3 = { a: 1, b: 2, c: 3 };
const array3 = Object.entries(objeto3).map(([key, value]) => value);
console.log(array3); // Salida: [1, 2, 3]
//El método que elijas dependerá de tus necesidades específicas. Cada uno de estos enfoques es útil en diferentes situaciones.