//Menú de opciones

var opc = parseInt(prompt("ingrse una opcion:  "));

switch (opc) {
    case 1:
        document.querySelector(".opciones").innerHTML += "hola";
        break;
    case 2:
        document.querySelector(".opciones").innerHTML += "chau";
        break;
    case 3:
        document.querySelector(".opciones").innerHTML += "te ayudo";
        break;
    default:
        alert("ingrese una opcion valida")
        break;
}