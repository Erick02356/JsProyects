const palabras = ['perro','casa','javascript','mongodb']
const letras = document.querySelector('.teclado')

/*Esta variable se hace con el fin de que el usuario pueda
de manera dinamica escoger que palabra quiere adiviar del
banco de palabras*/
let numeroPalabraAdivinar=3
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
var contador=1
const intentoPantalla= document.getElementById('intentos')
intentoPantalla.innerText=`${intentos} `
letras.addEventListener('click', e=> {

    if (e.target.tagName === 'SPAN') {
        const letra = e.target.textContent;

        if (palabraAdivinar.includes(letra)){
            console.log(letra)
            for (let i = 0; i < palabras[numeroPalabraAdivinar].length; i++){
                if (palabraAdivinar[i] == letra) {
                            espacios[i]=letra
                            palabra.innerHTML=espacios.join(' ');
                } 
            }  
        } else {
            const erroneo = document.getElementById(contador)
            erroneo.classList.remove('oculto');
            console.log(contador)
            contador+=1

        }
    }
    
    if (!espacios.includes(' _ ')) {
        modal.style.display = "block";
        contenidoModel.innerHTML= `Felicidades adivinaste la palabra y era ${espacios.join('')}`
    }else if (contador>10){
        modal.style.display = "block";
        contenidoModel.innerHTML= `Perdiste, no adivinaste la palabra y esta era ${palabras[numeroPalabraAdivinar]}`
    }
});


//Modal
let contenidoModel = document.getElementById('contenido')
let modal= document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
span.onclick = () =>{
    modal.style.display = "none";

  }

  window.onclick = (e)=> {
    if (e.target == modal) {
      modal.style.display = "none";
    }
}

function anteriorPalabra(palabra){
    if (palabra === 0){
        console.log('No sirve');
    }else{
        palabra=palabra-1;
        numeroPalabraAdivinar=palabra
    }


}

function reiniciar() {
    for (let i = 0; i < palabras[numeroPalabraAdivinar].length; i++) {
        espacios.push(' _ ')
    } 
}