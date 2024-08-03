//While ejecuta mientras se cumpla la condicion

let numero = 0;

while (numero < 6){
    numero ++;

    document.write(numero + "<br>")
}


//Do while hago mientras se cumple la diferencia es, en el while se pregunta y luego ejecuta, aquí se ejecuta y luego se hace

do{
    document.write(numero + "<br>")
    
    numero ++;

}while (numero < 6);


while (numero < 1000){
    numero++;
    if (numero == 10) {
        break //Finaliza o rompe el ciclo
    }
    document.write(numero);
}


//FOR bucle finito conforma 3 partes, defincion de la variable, la condicion y la iteracion (puede ser aumento o decrementeo)

for (let i = 0; i < 6; i++) {
    document.write(i + "<br>");
    
}


for (let i = 0; i < 16; i++) {
    if (i == 12){
        continue; //Se salta esa iteracion y sigue con el bucle
    }
 
    document.write(i + "<br>");
    
}

//FOR IN nos trae el indice del array y el of nos trae el contenido
//El for in se usa más para objetos, tambien las propiedades del objeto

let animales = ['gato','perro','Loro']

// for (const animal in animales) {
//     document.write(animal)
// }
// document.write('<br>')

// for (const animal of animales) {
//     document.write(animal)
// }

lista = ['añañon', 'añañin'];
lista2 = ['casa','guevo',lista]

//Label le da un apodo al for y puedo romper o continuar el for desde adentro pues lo llamo con el apodo
forRancio:
for (array in lista2)
    if (array == 2 ){
        for ( let array of lista){
            document.write('<br>'+ array+'<br>');
            break forRancio;
        }
    }else {
        document.write(lista2[array] +'<br>');
    }