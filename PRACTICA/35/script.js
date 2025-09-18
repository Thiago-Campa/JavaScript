//Nombre completo

var alumno = {
    nombre: "Thiago",
    apellido: "Campagnaro",
    nota: 9,

    nombreCompleto: function(){
        console.log(this.nombre + " " +  this.apellido)
    }
};

alumno.nota = 9;

alumno.nombreCompleto();
console.log("nota final  del alumno " + alumno.nombre + " es " + alumno.nota);