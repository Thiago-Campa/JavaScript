//Metodo en objeto

var persona = {
    nombre: 'ana',
    edad: 25,
    ciudad: 'Madrid',

    presentarse() {return "Hola soy " + persona.nombre + " tengo " + persona.edad + " y vivo en " + persona.ciudad}
};

console.log(persona.presentarse());
