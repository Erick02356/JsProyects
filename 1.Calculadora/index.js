//Cogemos a la etiqueta padre de la calculadora  y le agregamor un 
//QuerySelctor, agregamos un evento que cada ver que se de clic en un de sus elementos hijos podremos ver el contenido
const teclas= document.querySelector('.teclas')
const pantalla = document.getElementById('numero')
var numero1 = 0
var numero2 = 0
var operacion = ''
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
          
        }

    }
    /*
        Busca si el boton presionado es el que lleva por nombre de clase decimal
        luego mira si el numero no incluye un .  con el metodo includes, procede agregarselo
    */
    if (claseNumeros == 'decimal'){
        
        if(!pantalla.textContent.includes('.'))
        {
            pantalla.textContent=pantalla.textContent+'.'
        }else{
            pantalla.textContent=pantalla.textContent
            alert("YA TIENE PUNTO BURRO")
        }
    }

    /*
        Ahora para escoger los operador se rectifica que la clase coincida con las puestas en los botones de 
        operadores, luego a la variable global "numero1" se le asigna el valor del numero mostrado en pantalla
        a la variable operacion se le asigna el textContent de la tecla de oprimida
        y se limpia la pantalla poniendo 0.
    */

    if (claseNumeros == 'operador'  || claseNumeros== 'boton-largo' ){
        numero1 = pantalla.textContent;
        operacion = e.target.textContent
        pantalla.textContent=0;
    }


    /* 
         Al darle el boton calcular se le asigna el numero en pantalla numero2
         y llamamos a una funcion que haga toda la logica de las operaciones matematicas
    */
    if (claseNumeros == 'calcular'){       
        numero2=numeroEnPantalla;
        realizarOperacion();
    }
  
});
// Se llama el id del elemento AC para agregar un eventListener el cual
// cada que se de click automaticamente reiniciara los valores en nulos
const eliminar = document.getElementById('borrar')
eliminar.addEventListener('click',x =>{
    pantalla.textContent=0;
    numero1 = '';
    numero2 = '';
    operacion = '';
});


function realizarOperacion (){
    let resultado;
    switch(operacion){
        case '+':
            resultado = parseFloat(numero1) + parseFloat(numero2);
            break;
        case '-':
            resultado = parseFloat(numero1) - parseFloat(numero2);
            break;
        case '*':
            resultado = parseFloat(numero1) * parseFloat(numero2);
            break;
        case '÷':
            resultado = parseFloat(numero1) / parseFloat(numero2);
            break;
        default:
            return;
    }
    pantalla.textContent = resultado;
    numero1 = resultado;  // Permite continuar operando con el resultado
    numero2 = '';
    operacion = '';
}

