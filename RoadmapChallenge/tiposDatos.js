/*Datos Primitivos
A mi entendimiento los datos primitivos son la forma más basica en la 
que podemos almacenar y empaquetar los datos en JavaScript
Existen los siguientes
*/
//String se define como el texto
let color = "Amarillo";
let apellido = "Johnson";

//Numeros en este caso son todas representaciones distintas de 255 legibles por js
let num1 = 255; // integer
let num2 = 255.0; // floating-point number with no fractional part
let num3 = 0xff; // hexadecimal notation
let num4 = 0b11111111; // binary notation
let num5 = 0.255e3; // exponential notation

//Big int es usada para guardar numeros más grandes a (2^53-1)

//Boolean admite valor logico solo dos estados 
let boleana= true
let boleanaDos = false

// undefined, hace referencia cuando una variable aun no se le ha asignado valor
let numero 
console.log(numero) 

//NULL, Se define como la ausencia de valor alguno
let ausencia = null

//Symbol usado cuando se desea que el valor de una variable sea tajantemente unico
let unicaEspecial = Symbol('Soy unica y diferente jijiji')

//Para saber el tipo de dato de una variable existe el operador TypeOf

console.log(typeof(unicaEspecial)) //symbol