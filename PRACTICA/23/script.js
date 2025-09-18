//Verificar si el numero es par

function esPar(num){
    switch (true) {
        case (num %2 == 0):
            console.log("es par");
            break;
        default:
            console.log("no es par");
            break;
    }
}

let numero = parseFloat(prompt("Ingrese un número"));
esPar(numero);