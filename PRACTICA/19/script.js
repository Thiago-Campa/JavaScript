//Contraseña secreta

let pass = "secreta123";
let nuevaPass;

do {
    nuevaPass = prompt("ingrese la contraseña: ");
} while (nuevaPass != pass);

alert("bienvenido");