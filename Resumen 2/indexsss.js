let valor=20
for(let i=1; i<=10 ;i++){
    
 console.log(i);

 console.log(valor-=i);
}


const suma=(a,b)=>{
return a+b;
}

const suma2=(a,b)=> a+b;
console.log(suma2(3,4))

function resolvedor(a,b,c){
    raizes=Math.sqrt((Math.pow(b,2))-(4*a*c));
    
    let valorFinal= (((-1)*(b))+raizes)/2*a 
return valorFinal
}

console.log(resolvedor(1,5,4))


const perro={
raza:"labrador",

edad:3,
juzga:true,
muerde:false
}
//si tamaño no existe tambien seria undefined 
console.log(perro.tamaño)
//, si borramos un valor que sumamos quedara como NaN (Not a Number)
console.log(perro.tamaño + perro.edad)
//si no existe [] lo que devuelve es un undefined 
console.log(perro["muerde"])

function paridad(number){
if(number%2==0){
console.log("paridad:"+number)

return "par"
}else if (number%2!=0) {
console.log("no par:"+number)
return "impar"
} else {
    console.log("esa monda que es?")
    return "esa monda que es?"
} 
return 
}

console.log(paridad(7))
//operadores ternarios
const comprobacionParidad=(number)=> (number%2==0) ? "Numero par" : (number%2!=0) ? "impar" : "Esa monda que es?"

console.log(comprobacionParidad(2))