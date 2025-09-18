//Clasificador de números

var num = prompt("ingrse un numero: ");

if(num > 0){
    document.querySelector(".clasificar").innerHTML = "el numero es positivo";
} else if(num < 0) {
    document.querySelector(".clasificar").innerHTML = "el numero es negativo";
} else {
    document.querySelector(".clasificar").innerHTML = "el numero es nulo";
}