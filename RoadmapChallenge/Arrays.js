//Arrays es basicamente una lista indexada que puede contener varios valores de sin importar el tipo de dato primitivo
//Es buena practica declarar las arrays como constantes

// Se comienza a contar desde 0 es decir el elemento inicial, en este caso arroz para poder acceder a el se hace de la siguiente manera
const listaCompra = ['Arroz','Leche','Atun','Manzana']
document.write(listaCompra)
document.write(listaCompra[0])
//Las arrays son muy utilez porque pueden acceder a varios valores bajo una sola declaración de variable
//Se pueden crear y luego llenar de elementos:
const carros = [];
carros[0]= "Saab";
carros[1]= "Volvo";
carros[2]= "BMW";

//Al igual que los objetos se pueden crear usando la palabra reservada new
const cars = new Array("Saab", "Volvo", "BMW");

// Se puede cambiar un elemento de un array luego de ser creado
cars[0] = 'Toyota';

//Se puede transformar un array a un string con el metodo .toString();
document.write(listaCompra.toString());

//Arrays Asociativos se parecen más a un formato estilo Json
let pc ={
    nombre: 'ErickPc',
    Procesador: 'Ryzen5 3600G',
    ram: '16GB',
    Disco: ' 1TB',
};
//Para acceder el valor se debe indexar por el nombre algo al estilo clave-valor
document.write(pc['ram']) //16GB
let nombre = pc['nombre']
frase = `El nombre de mi pc es: <b>${pc['nombre']}</b> <br>
       El procesador es: <b>${pc['Procesador']}</b> <br>
        Tiene de ram <b>${pc['ram']}</b> <br>,
        Y un almacenamiento de <b>${pc['Disco']}</b> <br>`; 

document.write(frase)

// METODOS EN UN ARRAY

//1) length devuelve el tamaño de un array
let tamaño = listaCompra.length;

//2) ToString() convierte el array en un string separado por ,
listaCompra.toString()

//3) At se usa para traer un elemento por medio de su indice especifico
let alimento = listaCompra.at(2);
//Es igual a 
let alimento2 = listaCompra[2];

//4) Join convierte el array en un string pero puedes escoger con que separar cada elemento
let lista = listaCompra.join(" / ")

//5) pop() remueve el ultimo elemento del array
listaCompra.pop() //Si se guarda en variable devuelve el elemento eliminado
elementoEliminado = listaCompra.pop()


//5) push() agrega un elemento a la ultima posicion del  array
listaCompra.push() //Si se guarda en variable devuelve el nuevo tamaño del array
elementoEliminado = listaCompra.push()

/* Existen otros parecidos que son shift() y unshift()
estos funcionan igual que pop y push pero la diferencia
es que en vez de ser al final el al  inicio
*/

//Usando el length podemos agregar nuevos elementos
listaCompra[listaCompra.length] = 'pera';

//6) concat() concatena 2 arrays en uno nuevo

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

// 7)  copyWithin() etc pa eso ta la documentacion zzz
// https://www.w3schools.com/js/js_array_methods.asp