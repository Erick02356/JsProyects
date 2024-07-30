//Cogemos a la etiqueta padre de la calculadora  y le agregamor un 
//QuerySelctor, agregamos un evento que cada ver que se de clic en un de sus elementos hijos podremos ver el contenido
const teclas= document.querySelector('.teclas')
const pantalla = document.getElementById('numero')

/*El evento addEventListener Solo puede funcionar si es puesto
en un querySelector o en getElementById. Supongo que no funciona
en metodos que devuelven un listado de funciones
*/
teclas.addEventListener('click', e=> {

    /* Se definen estas tres constantes con el siguiete proposito
    1) Solo poder interactuar con el pad numerico
    2) Poder agregar correctamente los numeros en la pantalla de 
       resultado
    */
    const claseNumeros = e.target.className
    const numeros = e.target.textContent
    const numeroEnPantalla = pantalla.textContent
    /*Se valida que tenga la clase sea numeros y debido a que
      el numero 0 cuenta con dos estilos diferentes no valida
      entonces se agrego la segunda parte del condicional
    */
    if (claseNumeros == 'numeros' || numeros ==0  ){
        if (numeroEnPantalla == 0 ){
            pantalla.textContent=numeros;
        
        } else{
            pantalla.textContent=numeroEnPantalla+numeros
            let numero1 = numeroEnPantalla
          
        }

    }
    if (claseNumeros == 'decimal'){
        
        if(!pantalla.textContent.includes('.'))
        {
            pantalla.textContent=pantalla.textContent+'.'
        }else{
            pantalla.textContent=pantalla.textContent
            alert("YA TIENE PUNTO BURRO")

        }
    }
    if (claseNumeros == 'operador'  || claseNumeros== 'boton-largo' ){
        pantalla.textContent =0
        action.primerValor = pantalla.textContent
        console.log(action.primerValor)
    }

    if (claseNumeros == 'calcular'){       
        let numero2=numeroEnPantalla
        guardarNumero(numero2)
        console.log(guardarNumero)
    }
  

})
// Se llama el id del elemento AC para agregar un eventListener el cual
// cada que se de click automaticamente reiniciara la pantalla en 0
const eliminar = document.getElementById('borrar')
eliminar.addEventListener('click',x =>{
   pantalla.textContent=0
}  )

function suma (a,b){
    resultado = parseFloat(a)+ parseFloat(b)
    console.log(resultado)
}
const sumar = document.getElementById('sumar')
const restar = document.getElementById('restar')
const multiplicar = document.getElementById('multiplicar')
const dividir =document.getElementById('dividir')

function guardarNumero(a){
    operacion=[]
    operacion.push(a)
    return operacion
}
// const punto = document.getElementById('decimal')
// punto.addEventListener('click', e=>{
//     pantalla.textContent=pantalla.textContent+'.'  
// })