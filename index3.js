//javascript avanzado


// Optional chaining
// Optional chaining es una funcionalidad introducida en ECMAScript 2020 
//(también conocido como ES2020) que permite acceder a propiedades de un objeto de manera segura
//sin tener que comprobar explícitamente si esas propiedades existen.
//El operador de interrogación ?. se utiliza para acceder a propiedades 
//de objetos de manera segura. Si la propiedad a la que se está accediendo no existe o es null o 
//undefined, la expresión se evalúa como undefined, sin lanzar un error

function saludos(user) {
    console.log("Hola " + user.name);
    return "hola"+ " "+ user.name
  }
  function saludos2(user) {
    console.log("Hola " + user?.name);
    return "hola"+ " "+ user.name
  }

 
  
  let user = {
    name: "El chanclas"
  }
  
 
  console.log(saludos(user))//“Hola El chanclas”

  let user2 = {
   
  }
 
  console.log(saludos(user2))//"hola undifined "

//console.log(saludos(user3))error , user3 is not defined , etc


function saludo(nombre1, nombre2) {
    if (nombre2) {
      return "Hola " + nombre2;
    } else if (nombre1) {
      return "Hola " + nombre1;
    }
    return "Hola insecto";
  }

  

  console.log(saludo("Experimento 626", "Stitch"));
  console.log(saludo("Experimento 626"));
  console.log(saludo());
  
  function saludo2(nombre1, nombre2) {
    return "Hola " + (nombre2 ?? nombre1 ?? "insecto");
  }

  console.log(saludo2("Experimento 626", "Stitcheto"));
  console.log(saludo2("Experimento 626"));
  console.log(saludo2());
  
 
console.log(saludo2("Experimento 626", "Stitch"));
console.log(saludo2("Experimento 626", "undefined"));
console.log(saludo2(null, undefined));

//template string

function saludo3(nombre1, nombre2) {
  return `Hola ${nombre2 ?? nombre1 ?? "insecto"}`;
}





console.log(saludo3("Experimento 626", "Stitch"));
console.log(saludo3("Experimento 626"));
console.log(saludo3());

//Parametros predeterminados

function suma(a = 15, b = 18) {
  return a + b;
}

console.log(suma(4, true)); // 5
console.log(suma(3, false)); // 3

