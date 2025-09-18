//Ingresar números positivos y mostrar suma

let suma = 0;
let num = parseFloat(prompt("ingrese un numero (0 o negeativo para finalizar)"));

do {
    suma =+ num;
    num = parseFloat(prompt("ingrese un numero (0 o negeativo para finalizar)"));
} while (num > 0 );

alert("suma: " + suma);