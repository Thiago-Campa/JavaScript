//Verificación de mayoría de edad

var edad = prompt("ingrese su edad: ");

if(edad < 18){
    document.querySelector(".verificacion").innerHTML = "sos menor de edad.";
} else {
    document.querySelector(".verificacion").innerHTML = "sos mayor de edad.";
}