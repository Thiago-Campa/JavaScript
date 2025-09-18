//Sumar hasta poner 0

let suma = 0;
let num = parseFloat(prompt("ingrese un numero: ")) ;

while(num != 0){
    suma += num;
    num = parseFloat(prompt("ingrese un numero: ")) ;
}

alert("resultado: " + suma);