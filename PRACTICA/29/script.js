//Uso de this

function Auto(marca, tipo, modelo){
    this.marca = marca,
    this.tipo = tipo, 
    this.modelo = modelo
};

var miAuto = new Auto("Toyota", "convertible", 2023);
var tuAuto = new Auto("Ford", "fiat", 2003);

console.log("la marca de mi atuo: " + miAuto.marca);
console.log("el modelod de tu auto: " + tuAuto.modelo);