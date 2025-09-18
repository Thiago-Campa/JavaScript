var matrizFila =  new Array();

for(let x=0; x<10; x++){
    matrizFila[x] = new Array();
    for(let y=0; y<10; y++){
        matrizFila[x][y] = x + y
    }
}

for(let elemento in matrizFila){
    console.log(elemento + " = " + matrizFila[elemento]);
}