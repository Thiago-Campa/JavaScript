var colores = ["rojo", "azul", "verde"]; //primer forma
console.log("color: " + colores[1]);

var frutas = new Array(); //segunda forma
frutas[0] = "Sandia";
frutas[1] = "Manzana";
frutas[2] = "Mandarina";
console.log("fruta: " + frutas[1]);


frutas["uno"] = 10; //se le agrega otro valor al arreglo (la posicion "uno" tiene valor numerico 10)
console.log(typeof(frutas["uno"]));


var numero = new Array(5); //se pueden agrandar los arreglos
numero[0] = 1;
numero[1] = 2;
numero[2] = 3;
numero[3] = 4;
numero[4] = 5;
numero[5] = 8;
numero[30] = 10;

console.log("numero: " + numero[5]);


let tam = numero.length; //31

for(let indice = 0; indice < tam; indice++){
    console.log(numero[indice]);
}

