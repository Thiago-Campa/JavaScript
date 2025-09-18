//Crear objeto literal

var Libro = {
    titulo: "Mafalda",
    autor: "Lovercraft",
    lanzamiento: 1978,
    
    datos: function(){
        return this.titulo + ", " + this.autor + ", " + this.lanzamiento;
    }
};

console.log(Libro.titulo + " - " + Libro.autor);
console.log(Libro.lanzamiento);
console.log(Libro.datos());