function resolvedor(a,b,c){
    let uno=Math.pow(b,2) - (4*a*c);
    up=(-1)*b - Math.sqrt(uno,2)
    return x=(up/(2*a))

}

console.log(resolvedor(1,5,4))

function paridad(x){
if (x%2==0){
return true
}else if(x%2!=0){
return false
}
}
console.log(paridad(10))

let saludar = (nombre) => {
    return `Hola ${nombre}`
}
console.log(saludar("messi"))

function FizzBuzz(n){
const lista=[];

for (let i=1;i<=n;i++){

    if(i%3===0 && i%5===0){
      lista.push("FizzBuzz")

    }else if(i%3===0){
        lista.push("Fizz")
    }else if(i%5===0){
        lista.push("Buzz")
    }else {
        lista.push(i)
    }
   
}
return lista
}

function fizzBuzz(n) {
    const arr = [];
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        arr.push("FizzBuzz");
      } else if (i % 3 === 0) {
        arr.push("Fizz");
      } else if (i % 5 === 0) {
        arr.push("Buzz");
      } else {
        arr.push(i);
      }
    }
    return arr;
  }
  

console.log(FizzBuzz(20));

function isEven (number) {
  console.log(number % 2)
  return number % 2 === 0;
}

const itsEven = (number) =>  !(number % 2);
//Operador Ternario
console.log(itsEven(2) ? 'Par' : 'Impar');


console.log(isEven(2))
console.log(itsEven(2))


const EsPar = (number) => number % 2 === 0;

console.log(EsPar(2))

function isEven2 (number) {
  console.log(number % 2 === 0)
  return number % 2 === 0;
}
console.log(isEven2(2))









const conditional = 0;
//1 = true
//0=false 

if (!conditional) {
  console.log("Exito");
}

