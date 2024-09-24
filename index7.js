//spread operators listas

const users = ["Ismael", "Rafael", "Otroel"];

console.log(users[1]); // “Rafael”

const [ user1, ...otros ] = users;

console.log(otros[0]); // “Rafael”
console.log(users[1]); // “Rafael”



const nombre = "Ismael";
const otros2 = {altura: 1.75, puntaje: 3};


console.log(otros2.altura); // 1.75

const user3 = {nombre, otros2};

console.log(otros.altura); // 1.75
console.log(user3.altura); // undefined
console.log(user3.otros2.altura);




//pero si usamos ...

const nombres = "Ismael";
const otross = {altura: 1.75, puntaje: 3};


console.log(otross.altura); // 1.75

const usere = {nombre, ...otross};

console.log(otross.altura); // 1.75
console.log(usere.altura); // 1.75
