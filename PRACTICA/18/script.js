//Ingresar números hasta que sea mayor a 100
let intentos = 1;

do {
    num = parseFloat(prompt("ingrese un numero: "))

    if (num < 100){
        intentos += 1;
    }
} while (num < 100);

alert("cantdad de intentos: " + intentos);