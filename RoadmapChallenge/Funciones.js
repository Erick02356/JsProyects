/* Una funcion es un bloque de codigo el cual esta diseñado para realizar una tarea en concreto
Este bloque de codigo se ejecuta cada vez que se invoca 

// Se declara la funcion:
Una funcion consta de  varias partes
 esta el nombre que la identifica y por el que se debe llamar, sus parametros y es que ahí se guardan los 
 argumentos o valores que espera recibir, el codigo dentro de llaves que es el que se va a ejecutar cuando 
 sea llamada la funcion y por ultimo el valor que retorna, escrito con la palabra return. El return finaliza 
 la ejecución del codigo
*/
function elSumador(a,b) {
    return a + b
}

//Para llamar y obtener un valor se debe almacenar en una variable

let resultado = elSumador(2,3)
document.write(resultado) // 5

function elMultiplicador(a,b) {
    console.log(a * b)
}

//Si por el contrario la variable no tiene un return, sino que ejecuta algo entonces solo se llama a la funcion
elMultiplicador(4,3) //12


//Arrow function

const saludar = function (nombre) {
    let frase = `Hola ${nombre} eres un papu`;
    document.write(frase)
}
// ==

const saludo= nombre=>{
    let frase = `Hola ${nombre} eres un papu`;
    document.write(frase)
}

