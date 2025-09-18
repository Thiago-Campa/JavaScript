var nombre = prompt("ingresa tu nombre: ");
var edad = prompt("ingresa tu edad: ");

if (nombre == "Thiago" || nombre == "thiago") {
    document.querySelector(".validacion").innerHTML = "Bienvenido Thiago ";
} else {
    document.querySelector(".validacion").innerHTML = "No sos Thiago";
}

if (edad < 18) {
    document.querySelector(".minimo").innerHTML = "Sos menor de edad";
} else {
    document.querySelector(".minimo").innerHTML = "Sos mayor de edad";
}
