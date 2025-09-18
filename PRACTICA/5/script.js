var pass = 123;

var passNueva = prompt("ingrese su contraseña: ");

while (passNueva != pass) {
    alert("contrseña incorrtecta")
    var passNueva = prompt("ingrese su contraseña: ");
}

if(passNueva == pass){
    document.querySelector(".validacion").innerHTML = "bienvenido";
}

