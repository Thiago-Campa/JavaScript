//Calculadora de descuentos

var precio = parseFloat(prompt("ingrese el valor de la compra: "));

if(precio > 1000){
    let desc = 0.10
    precio = precio - (precio * desc);
    document.querySelector(".pago").innerHTML = "el monto final es de: " + precio;
} else {
    document.querySelector(".pago").innerHTML = "el monto final es de:  " + precio;
}