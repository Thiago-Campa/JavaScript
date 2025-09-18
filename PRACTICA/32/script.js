//Metodos de strings

var cadena = "Programacion en JavaScript!";

var minusculas = cadena.toLocaleLowerCase();
var cortar = cadena.slice(16, 27)
var reemplazar = cadena.replace("JavaScript", "Python");
var contiene = cadena.includes("Programacion");

console.log("antes: " + cadena + " - ahora: " + minusculas);
console.log("odio a " + cortar);
console.log("ahora si :) " + reemplazar);
console.log("contiene programacion? " + contiene);