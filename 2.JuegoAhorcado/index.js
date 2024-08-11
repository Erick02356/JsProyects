const palabras = ['perro']
const letras = document.querySelector('.teclado')

/*Esta variable se hace con el fin de que el usuario pueda 
de manera dinamica escoger que palabra quiere adiviar del
banco de palabras*/
let numeroPalabraAdivinar=0
//console.log(letras)

const espacios = []
const intentos = 10 + palabras[numeroPalabraAdivinar].length
console.log(intentos)
for (let i = 0; i < palabras[numeroPalabraAdivinar].length; i++) {
    espacios.push(' _ ')
}
// console.log(espacios)
const palabra = document.getElementById('palabra')
palabra.innerHTML=espacios.join('');
//console.log(element)
// console.log()
const palabraAdivinar = Array.from(palabras[numeroPalabraAdivinar])

letras.addEventListener('click', e=> {
    const letra = e.target.textContent
    //console.log(letra)
    for (let index = 0; index < intentos; index++) {
        
        if (palabraAdivinar[index] == letra) {
            espacios[index]=letra
            palabra.innerHTML=espacios.join('');
            // console.log('Si es')
        } else { 
            // console.log('No es')            
        }
        
    }
});

