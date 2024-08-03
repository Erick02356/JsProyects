let edad = parseInt(prompt('Ingrese su edad'));
let persona;
let hora = parseInt(prompt('Ingrese la hora'));
if (edad >= 18){
    document.write("Entra flaco")
    if (hora == 2 && persona == undefined) {
        persona= 1
        document.write("GRATIS")
    }
}else{
    document.write("No puedes entrar ")
}

