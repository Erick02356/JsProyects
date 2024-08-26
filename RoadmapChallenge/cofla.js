//Cofla objetos

class Celulares {
    constructor(color,peso,resolucion,camara,ram) {
        this.color = color;
        this.peso = peso;
        this.resolucion = resolucion;
        this.camara = camara;
        this.ram = ram;
        this.encendido = false;

    }
    presionarBotonPrendido(){
        if (this.encendido == false) {
            alert("Celular prendido");
            this.encendido=true
        } else {
            alert("Celular Apagado");
        }
    }



    reiniciar(){
        if (this.reiniciar == true) {
            alert("Reiniciando... ");
        } else {
            alert("Apagado");
        }
    }

    tomarFoto(){
        alert(`Foto tomada en la resolución ${this.camara}`)
    }

    grabar(){
        alert(`Video grabado en la resolución ${this.camara}`)

    }

    mostrarInfo(){
         return `El celular es de color ${this.color}, pesa ${this.peso}, tiene una resolución de pantalla de ${this.resolucion}, la cámara en píxeles de resolución es de ${this.camara}, y tiene ${this.ram}`
    }
}

const celular1 = new Celulares("Rojo","150gr","1080px","48px","4GB ram")
const celular2 = new Celulares("Negro","120gr","1080px","64px","4GB ram")
const celular3 = new Celulares("Azul","100gr","1080px","108px","6GB ram")

// celular1.mostrarInfo();
// celular2.mostrarInfo();
// celular3.mostrarInfo();

//AltaGama GrabarLenta camaraExtra y reconocimiento facial
// Apps

class CelularPro extends Celulares{
    constructor(color,peso,resolucion,camara,ram,resolucionCamaraExtra){
        super(color,peso,resolucion,camara,ram)
        this.reconocimiento = true
        this.numCamaras = 2
        this.resolucionCamaraExtra = resolucionCamaraExtra
        //this.tipoGrabacion = parseInt(prompt("Tipo 1 para normal o 2 para lento"))
    }

    grabacion(){
        if (this.tipoGrabacion == 2 ){
            alert(`Grabando en modo camara super lenta  en la resolución ${this.camara}`);
        }else{
            super.grabar();
        }
    }

    reconocimientoFacil(){
            alert("Reconociendo cara ...")

    }
    infoAltaGama (){
        return `${this.mostrarInfo()}  resolucion 2 camara: ${this.resolucionCamaraExtra}`
    }
}

const celularPro = new CelularPro("negro","100gr","4080px","256px","16GB ram","108PX")
const celularPro2 = new CelularPro("negro","150gr","4080px","256px","16GB ram","108PX")

// document.write(`
//     ${celularPro.infoAltaGama()} <br>
    
//     `);

class Apps {
    constructor(numDescargas,puntuacion,peso){
        this.descargas = numDescargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        
    }
    instalar(){
        alert("Esta instalando")
    }
    abrir(){
        alert("Abriendo")
    }
    cerrar(){
        alert("Cerrando")

    }
    desistalar(){
        alert("Desistalando")
    }

    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b></br>
        Puntuación: <b>${this.puntuacion}</b></br>
        Peso en megabytes: <b>${this.peso}</b></br>

        `
    }
}
const apps = [
    new Apps("1200", "4 estrellas", 10),
    new Apps("1900", "4 estrellas", 20),
    new Apps("1100", "4 estrellas", 30),
    new Apps("1300", "4 estrellas", 15),
    new Apps("1500", "4 estrellas", 10),
    new Apps("1900", "4 estrellas", 16),
    new Apps("1600", "4 estrellas", 21)
];
for (let i = 0; i < apps.length; i++) {
    document.write(`${apps[i].appInfo()}<br>`);
}
