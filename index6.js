//sort() 
// sort() es una función incorporada en JavaScript que se utiliza 
//para ordenar los elementos de un array en orden ascendente o descendente.

//Es importante tener en cuenta que la función sort() modifica el array original

const numbers = [4, 5, 2, 1, 1, 7];

const sortAsc = (number1, number2) => number1 - number2;

console.log(numbers.sort(sortAsc)); // 


// .reduce()
//El reduce acepta un metodo como primer parametro , este es un callback que se ejecutara por cada
//uno de los elementos tendriamos primero el valor anterior , despues el valor actual , el indice y el array
//El valor inicial del acomulador es 0 

[0,1,2,3,4].reduce((valorAnterior,valorActual,indice,array) =>{ 
//lo que hacemos es devolver el valor con el que vamos a trabajar despues 
//el ValorAnterior es el acomulado
console.log(valorAnterior,valorActual,indice,array)
console.log(valorAnterior+valorActual)
return valorAnterior+ valorActual

} ,)
const numberse = [4, 5, 2, 1, 1, 7];

const doSum = (prevVal, curVal) => prevVal + curVal;

console.log(numberse.reduce(doSum)); 

// Math Max

console.log(Math.max(...[0,2,20,4,5,6,7]))
//Math.min
console.log(Math.min(...[0,-2,20,4,5,6,7]))

//Deestructurando objetos
const user = {nombre: "Ismael", altura: 1.75, puntaje: 3};

console.log(user.nombre); // “Ismael”

const { nombret } = user;

console.log(nombret); // “Ismael”
console.log(user.nombre); // “Ismael”



const user2 = {nombre: "Ismael", altura: 1.75, puntaje: 3};

console.log(user.nombre); // “Ismael”

const { nombre, ...otros } = user;

console.log(nombre); // “Ismael”
console.log(user2.nombre); // “Ismael”
console.log(otros.puntaje); // 1.75
console.log(user2.altura); // 1.75


//Deestructurando arrays
// Ejemplo 1
const numeros = [1, 2, 3];
const [a, b, c] = numeros;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// Ejemplo 2
const [x, , z] = [4, 5, 6];
console.log(x); // 4
console.log(z); // 6

//valores predetermindos listas

const users = [];

console.log(users[0]); // undefined

const [ user1 = "Otroel" ] = users;

console.log(user1); // “Otroel”
console.log(users[0]); // undefined



