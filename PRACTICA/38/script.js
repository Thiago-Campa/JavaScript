//Mostrar y crear alumno

function Alumno(nombre, edad, curso){
    this.nombre = nombre;
    this.edad = edad;
    this.curso = curso;

    this.mostrar = function(){
        console.log("nombre: " + this.nombre + " edad: "+ this.edad + " curso: " + this.curso);
    };
}

let alumno1 = new Alumno("Thiago", 22, 3);

alumno1.mostrar();