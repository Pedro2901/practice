//function y arrow function 

const saludar= function (nombe){
    console.log("hola ",`${nombe}`)
}

// const saludar2=(nombe) =>{
//     console.log("hola ",`${nombe}`)
// }

const saludar2=(nombe) => console.log("hola ",`${nombe}`) //De esta forma tambien se puede 

console.log(saludar("oscar"))
console.log(saludar2("osvaldo"))

function suma(a, b){
    return a + b;
  }
  

  const suma2 = (a, b) => a + b;
  
  
console.log(suma(2,2))
console.log(suma2(2,4))


// .split
//El método .split() en JavaScript se utiliza para dividir una cadena de texto en un array de subcadenas 
//(strings más pequeños) en función de un separador especificado. 
//Este separador puede ser un carácter específico, una expresión regular o una cadena de caracteres.

let string  ="hola gente como les va"
let stringpasadoArray=string.split(" ");
console.log(stringpasadoArray)

//substring

let text0 = "Apple, Banana, Kiwi";

console.log(text0.substring(7, 13));	// “Banana”
console.log(text0.substring(7));		

//slice
let text = "Apple, Banana, Kiwi";

console.log(text.slice(7, 13));		// “Banana”
console.log(text.slice(7));		// “Banana”
console.log(text.slice(-12, 13));	// “Banana”
console.log(text.slice(-12, -6));	// “Banana”
console.log(text.slice(7, -6));		// “Banana”
console.log(text.slice(-12));

//trim  junta el texto 

let text2 = "    Apple, Banana, Kiwi     ";
console.log(text2)
let textTrim = text.trim(); // "Apple, Banana, Kiwi"
console.log(textTrim)//  "Apple, Banana, Kiwi"

console.log(text2.slice(7, 13));	
console.log(textTrim.slice(7, 13));	

//.padStart(), .padEnd()

let text4 = "Apple, Banana, Kiwi";



console.log(text4.padStart("  ")); // "  Apple, Banana, Kiwi"
console.log(text4.padEnd("  ")); // "Apple, Banana, Kiwi  "

//objetct keys
const user = {
    firstname: "Rafael",
    lastname: "Marquez"
   }
   
   
   
   console.log(Object.keys(user)); 


   



 //  La función replace en JavaScript se utiliza para buscar una subcadena específica en una cadena de texto y reemplazarla por otra subcadena o valor. Aquí tienes una descripción detallada de cómo funciona replace junto con ejemplos:




//cadena.replace(subcadenaABuscar, subcadenaDeReemplazo);
//cadena: La cadena de texto original en la que deseas realizar la búsqueda y el reemplazo.
//subcadenaABuscar: La subcadena que deseas buscar dentro de cadena para reemplazar.
//subcadenaDeReemplazo: La subcadena que deseas utilizar como reemplazo para subcadenaABuscar.
//Ejemplo 1 - Reemplazar una subcadena:


const texto2 = "Hola, mundo!";
const resultado1 = texto2.replace("mundo", "amigo");
console.log(resultado1); // Salida: "Hola, amigo!"
//En este ejemplo, estamos buscando la subcadena "mundo" en la cadena de texto texto y la reemplazamos por "amigo". El resultado es "Hola, amigo!".

//Ejemplo 2 - Reemplazar todas las ocurrencias con expresión regular:


const texto3 = "¡Hola, hola, hola!";
const resultado2 = texto3.replace(/hola/gi, "adiós");
console.log(resultado2); // Salida: "¡adiós, adiós, adiós!"
//En este caso, utilizamos una expresión regular /hola/gi para buscar todas las ocurrencias de "hola" en la cadena de texto texto, independientemente de si están en mayúsculas o minúsculas (gracias al modificador i). Luego, reemplazamos todas las ocurrencias por "adiós".

//Ejemplo 3 - Utilizando una función de reemplazo personalizada:


const texto = "La fecha {actual} [es] {fecha}";
const resultado = texto.replace(/\{([^}]+)\}/g, (match, variable) => {
  if (variable === "fecha") {
    return new Date().toDateString();
  } else {
    return match;
  }
});

console.log(resultado);
//En este ejemplo, utilizamos una expresión regular /(\{[^}]+\})/g para buscar y capturar cualquier texto entre llaves {}. Luego, proporcionamos una función de reemplazo personalizada que evalúa el contenido capturado. Si es "fecha", lo reemplazamos con la fecha actual; de lo contrario, dejamos el texto como está.

//La función replace es muy versátil y puede utilizarse con expresiones regulares para realizar reemplazos avanzados en cadenas de texto.

function eliminarVocales(cadena) {
  // Utilizamos una expresión regular para eliminar las vocales
  return cadena.replace(/[aeiouAEIOU]/g, '');
}

const textos = "Hola, este es un ejemplo de eliminación de vocales.";
const resultados = eliminarVocales(textos);

console.log(resultados);

function eliminarVocales(cadena) {
  // Utilizamos una expresión regular para eliminar las vocales
  return cadena.replace(/[aeiou]/gi, '');
}

const textoss = "HOLA, este es un ejemplo de eliminación de vocales.";
const resultadoss = eliminarVocales(textos);

console.log(resultadoss);

//Esta función utiliza el método replace con una expresión regular [aeiouAEIOU] 
//para encontrar todas las vocales (mayúsculas y minúsculas) en la cadena y las 
//reemplaza con una cadena vacía ''. El modificador g en la expresión regular 
//asegura que todas las ocurrencias de las vocales sean reemplazadas. 
//Esta solución es eficiente en términos de rendimiento y es una de las formas más rápidas de eliminar las vocales de una cadena en JavaScript.

//El modificador "g" permite reemplazar todas las ocurrencias encontradas en toda la cadena.
//El modificador "i" permite que sea insensible a mayúsculas y minúsculas



//Modificador "m" (multiline): Este modificador se utiliza cuando se trabaja con cadenas de texto multilineales. 
//Cambia el comportamiento de los anclajes ^ y $ para que coincidan con el principio y el final de cada línea 
//en lugar del principio y el final de toda la cadena.

const textod = "Línea 1\nLínea 2\nLínea 3";
const expresiond = /^Línea/gm;
const resultadod = textod.replace(expresiond, "Reemplazo");
console.log(resultadod);

//Modificador "s" (dotall): Este modificador permite que el carácter 
//coincida con cualquier carácter, incluidos los caracteres de nueva línea (\n).
//Es útil cuando deseas buscar texto en cadenas multilínea.
const textoa = "Línea 1\nLínea 2\nLínea 3";
const expresiona = /Línea 1.+Línea 3/s;
const resultadoa = textoa.match(expresiona);
console.log(resultadoa);


//Modificador "u" (Unicode): Este modificador habilita el manejo de cadenas de texto Unicode en 
//expresiones regulares, lo que es útil cuando trabajas con caracteres fuera del conjunto ASCII.

const textoc = "Café";
const expresionc = /\w+/u;
const resultadoc = textoc.match(expresionc);
console.log(resultadoc);
