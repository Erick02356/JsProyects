let resultado= 0
/*
En las siguietes 3 lineas se le asignas constantes las cuales tienen un alcance global
La const calcular trae la clase del contenedor padre, el cual es donde esta hecha la calculadora
La constante pantalla trae el id de la etiqueta que muestra el resultado de las operaciones en pantalla
La constante teclado trae la clase llamada teclas, se trata de la etiqueda que envuelve cada uno de los botones que hacen 
dicha funcion. No se llaman desde el document (referenciando a toda la pagina), se realiza desde el nodo padre "calcular"
*/
const calcular = document.querySelector('.contenedor')
const pantalla = document.querySelector('#numero')
const teclado = calcular.querySelector('.teclas')

/*Se agrega un metodo que escuche todo evento (en este caso clicks) al documento, en este caso la constante teclado
la cual tiene la etiqueta y a los hijos, con la clase .teclas
Y luego de decir el tipo de evento, se debe agregar el tipo de funcion que se ejecutará luego de efectuado el evento,
en este caso es una funcion flecha
*/
teclado.addEventListener('click', e => {
//Valida que la etiqueta que el evento retorne por medio de la propiedad .target haga match con la que se pide 'button'
    if (e.target.matches('button')) {
        /*Asignacion de constantes, tecla y accion 
        tecla guarda el elemento donde el evento ocurrio
        La constante accion se le asigna el valor de la tecla la cual contenga el data-action
        el cual guarda los atributos datas los cuales son como variables con valores que después en 
        javascript los puedes recuperar llamando al data. y el nombre que le hayas puesto. 
        */
        const tecla = e.target
        const accion = tecla.dataset.action
        //la constante teclaInfo guarda el valor del boton clikeado y numero pantalla el numero que esta ahí (0 en este caso)
        const teclaInfo = tecla.textContent
        const numeroPantalla= pantalla.textContent

        //Solo se ejecuta solo si el button es diferente a todo el que la constante accion localice, es decir todo aquel que no tenga un data-action en su etiqueta
        if (!accion) {
            //Solo ejecutará si el numero en pantalla es igual a 0, más no estrictamente igual debido a que el 0 en la etiqueta se lee como un string. Una vez se cumpla reemplazará el valor de 0 por el guardado en tecla info
            if(numeroPantalla == 0){
            pantalla.textContent=teclaInfo
            } else {
                pantalla.textContent= numeroPantalla+teclaInfo
                //De lo contrario se concatenara con el que este
            }
        };

        //Se ejecutará cuando se clikee un operador aritmetico y agregará una clase que resaltará el boton seleccionado
        if (
            accion === 'sumar' ||
            accion === 'restar' ||
            accion === 'multiplicar' ||
            accion === 'dividir'
        ) {
            tecla.classList.add('seleccionado')
            
        } 
        Array.from(tecla.parentNode.children).forEach(tecla => tecla.classList.remove('seleccionado'))

        if(
            accion ==='decimal'
        ){
            pantalla.textContent=numeroPantalla+"."
        }
        if(
            accion ==='borrar'
        ){
            console.log('Lo hice yo')
        }
        if(
            accion ==='calcular'
        ){
            console.log('Lo hice yo')
        }
    }
   })
