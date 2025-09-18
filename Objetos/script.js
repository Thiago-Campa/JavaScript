//constructor
function Perro(nombre, edad, vivo) {
    this.nombre = nombre;
    this.edad = edad;
    this.vivo = vivo;
}

var perro1 = new Perro("black", 2, true);
console.log(perro1);

var perro2 = new Perro("flopy", 4, false);
console.log(perro2);

//arreglo
var animal = [perro1, perro2];
console.log(animal);