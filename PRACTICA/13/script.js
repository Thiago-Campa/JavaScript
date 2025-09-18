//Ingreso con contraseña

var pass = "hola123";
let nuevaPass = prompt("ingrese la contraseña: ");
while (nuevaPass != pass) {
    nuevaPass = prompt("ingrese la contraseña: ");
}

if (nuevaPass == pass) {
    alert("bienvenido");
}