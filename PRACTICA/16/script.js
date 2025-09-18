//Validar número positivo

let num = parseFloat(prompt("ingrese un numero positivo: "));

while (num < 0){
    num = parseFloat(prompt("ingrese un numero positivo: "));
}

alert("el numeo es positivo")