//Calificacion

var nota = parseInt(prompt("ingrese su nota: "));

switch (nota) {
    case 1:
    case 2:    
    case 3:
    case 4:
    case 5:
        alert("insuficiente");    
        break;
    case 6:
        alert("aprobado");
        break;
    case 7:
    case 8:
        alert("bien");
        break;
    case 9:
        alert("muy bien");
        break;
    case 10:
        alert("exelente");
        break;
    default:
        alert("ingrese una nota valida");
        break;
}