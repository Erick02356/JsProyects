
//Las clases son como fabricas de objetos
class animal {
    
    //parametros para construir el objeto
    constructor(especie, edad, color) {

        //Atributos
        this.especie = especie;
        this.edad = edad;
        this.color = color; 
        this.informacion = `Soy ${this.especie}, tengo ${this.edad} y soy de color ${this.color} <br>`;        
    }
    //Metodos
    verInformacion(){
        document.write(this.informacion)
    }
    // ladrar(){
    //     //Manera de aplicar Polimorfismo
    //     if (this.especie == 'perro') {
    //         document.write("Wow <br>")
    //     } else {
    //         document.write("No ladra pq es un"+ this.especie + "<br>")            
    //     }
    // }

}

//Herencia  
class perro extends animal {
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza =null;
    }

    //Un metodo estatico es aquel que se define sin necesidad de los atributos y definirlo en una constante o variable
    static ladrar(){
        alert("GUAU")
    }

    //SETTERS(MODIFICA O DEFINE) Y GETTER (OBTENER VALOR)

    //Manera incorrecta de modificarlo
        // modificarRaza(){
        //     this.raza = 'pedro'
        // }

    //Manera correcta de modificarlo
    set setRaza(newName){
        this.raza = newName;
    }

    get getRaza(){
        return this.raza;
    }
    
}

//Instanciar objetos
const perros = new perro("perro",5,"marron","Doberman");
const gato = new animal("gato",4,"negro");
const pajaro = new animal("pajaro",1,"rojo");

//Mostrarlos en pantalla
// document.write(perro.informacion + "<br>")
// document.write(gato.informacion + "<br>")
// document.write(pajaro.informacion + "<br>")

// perros.modificarRaza('Pedro');  no funciona

perros.setRaza = 'Pedro';
document.write(perros.getRaza)




//Caracteristicas de la POO


// Teoria 


//Abstraccion es intentar simplificar un objeto lo maximo posible 
//Modularidad Separar de manera atomica el codigo para que se mas facil de entender
//Encapsulamiento manera de restringir los  datos
//Polimorfismo es como un objeto puede comportarse de manera diferente en sus metodos debido a sus atributos.


