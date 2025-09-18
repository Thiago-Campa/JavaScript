//Area de rectangulo

function areaRectangulo(altura, base){
    do {
        altura = parseFloat(prompt("ingrese la altura: "));
    } while (altura <= 0);

    do{
        base = parseFloat(prompt("ingrese la base: "));
    } while (base <= 0);

    let area = base * altura;

    console.log("area: " + area);
}

let altura;
let base;

areaRectangulo(altura, base);