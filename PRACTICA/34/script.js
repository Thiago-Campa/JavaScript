//Nombre completo

var alumno = {
    nombre: "Thiago",
    apellido: "Campagnaro",

    nombreCompleto: function(){
        console.log(this.nombre + " " +  this.apellido)
    }
};

alumno.nombreCompleto();