/*
Las Variables en JavaScript se declaran haciendo uso de estas tres palabras clave
var let y const 
Se debe ser declarativo en el nombre de la variable a la hora de asignarlo debido a que será mucho más facil a la hora
de entender nuestro codigo, a su vez, se debe hacer uso del camelCase. Es cuando el nombre de una variable es de una 
palabra compuesta entonces se debe juntar talQueAsí, haciendoDistincionEntrePalabrasConSuInicialEnMayuscula 😀
*/

//La palabra reservada var es de un ambiente global es decir al declararse puede ser accedida en todo el codigo
var variable = 'HolaMundo';
//let es una variable de ambito local, es decir solo puede ser accedida y alterada dentro del bloque donde fue creada

let variableNumeroDos = 'HolaPepito';

// const como su nombre indica es una constante es decir que su valor luego de declarado no puede ser modificado, 
//igualmente es de ambito local, entonces solo puede ser llamado desde su bloque de codigo.
const pi = 3.14
//Ejemplo

/*  Creamos la funcion llamar a pepito y le pediomos que muestre por consola el contenido en la variableNumeroDos
el resultado será satisfactorio debido a que el ambito local de la variable  "variableNumeroDos es global".
Ahora bien si dentro de la funcion 'llamarApepito' creamos una variable (despedir) y la llamamos en consola 
*/ 
function llamarApepito(){
    console.log(variableNumeroDos)
    let despedir = 'ChaoDonPepito';
}

llamarApepito()
//Nos arroja un error debido a que no esta definida (si lo esta pero dentro de la funcion que es su ambito local)
console.log(despedir) 