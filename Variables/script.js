//string: cadena de texto -> "" - ''
//number: 1, 2, 3, 4, 5
//booleano: false / true

//tipos de variables: var (alcance global), let (alcance en bloque/regional), const 

let numero  = 15;
let numero2, numero3;
const nacimiento = "8/9/2003" // const se declara e inicia al mimsmo tiempo

numero = 23;
numero = 1; //let siempre toma el ultimo valor

numero2 = 9;
numero3 = 2;

let suma = numero + numero2 + numero3;

alert(numero);
alert(nacimiento);
alert(suma);