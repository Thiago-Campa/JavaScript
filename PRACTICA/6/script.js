//Ingresar un número del 1 al 7 e indicar el día correspondiente

var dia = parseInt(prompt("ingrese un dia de la semana (1-7)"));

switch (dia) {
    case 1:
        document.querySelector(".dia").innerHTML = "lunes";
        break;
    case 2:
        document.querySelector(".dia").innerHTML = "martes";
        break;
    case 3:
        document.querySelector(".dia").innerHTML = "miercoles";
        break;
    case 4:
        document.querySelector(".dia").innerHTML = "jueves";
        break;
    case 5:
        document.querySelector(".dia").innerHTML = "viernes";
        break;
    case 6:
        document.querySelector(".dia").innerHTML = "sabado";
        break;
    case 7:
        document.querySelector(".dia").innerHTML = "domingo";
        break;
    default:
        alert("ingrese un numero valido.");
        break;
}

