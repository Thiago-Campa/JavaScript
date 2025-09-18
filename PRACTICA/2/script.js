//Comparacion
var n1 = prompt("ingrese el primer numero: ");
var n2 = prompt("ingrese el segundo numero: ");

if (n1 > n2) {
    document.querySelector(".comparar").innerHTML = "el numero " + n1 + " es mayor";
} else  if (n2 > n1){
    document.querySelector(".comparar").innerHTML = "el numero " + n2 + " es mayor";
} else {
    document.querySelector(".comparar").innerHTML = "los numeros son iguales";
}