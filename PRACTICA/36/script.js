//Productos de una tienda

function Productos(nombre, precio, stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;

    this.mostrar = function(){
        console.log(
            `producto: ${this.nombre} - Precio: $${2000} - Stock ${43}`
        )
    };
}

var Producto1 = new Productos("masita", 2000, 2);

Producto1.mostrar();