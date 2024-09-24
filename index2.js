//05 Taller practica 
// Punto 1
function elevarAlCuadrado(lista){
const Barrera=[];
for(let i=0; i<lista.length ; i++){
   const numero=lista[i]**2;
   Barrera.push(Math.pow(lista[i],2));
   
}
return Barrera;
}


function squareList(numbers) {
    const squaredList = [];
    
    for (let i = 0; i < numbers.length; i++) {
      const squaredNumber = numbers[i] ** 2;
 
      squaredList.push(squaredNumber);
    }
    
    return squaredList;
  }
  
  // Ejemplo de uso
  const numbers = [1, 2, 3, 4, 5];
  const squaredNumbers = squareList(numbers);
  console.log(typeof(squaredNumbers))
  console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
  
console.log(typeof([1,2,3,4,5]))
console.log(elevarAlCuadrado([1, 2, 3, 4, 5]))





// punto 2

function oddSum(lista){
let Suma=0;

for(let i =0 ; i<lista.length;i++){
   
    if(lista[i]%2!=0){
    Suma+= lista[i];
    }else {
      console.log("Numero par")
    }

}

return  Suma;
}
console.log(oddSum([1,2,3,4,5]))

// punto 3

const colegio={
_id: "asc5sde01",
  firstName: "Mariana",
  lastName: "Hernandez",
  height: 1.5,
  courses: [
  {
  name: "Inglés",
  grade: 2.5,
  height: 1.5,
  },
  {
  name: "Matemáticas",
  grade: 3.6,
  height: 1.2,
  },
  {
  name: "Castellano",
  grade: 4.7,
  height: 1.1,
  },
  {
  name: "Química",
  grade: 5.0,
  height: 1,
  },
  {
  name: "Sociales",
  grade: 1.3,
  height: 2,
  }
  
  
 ]
}
  
  console.log(colegio.courses.length)
 function condicional(Lista){
  let cont=0;
  let sum=0;
  console.log(Lista.courses.length)
  for(let i =0; i<Lista.courses.length;i++){
  sum+=Lista.courses[i].grade
  console.log(Lista.courses[1].grade)
  console.log(sum)
  }
  let primedio= sum/Lista.courses.length
  return primedio
  
 }

 console.log(condicional(colegio))

 //punto 10

 function returnapartir(Lista,parametro){

 }

