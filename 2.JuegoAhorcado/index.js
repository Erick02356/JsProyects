const palabras = ['casa']
const letras = document.querySelector('.teclado')
console.log(letras)
letras.addEventListener('click', e=> {
    const letra = e.target.textContent
    console.log(letra)

});
