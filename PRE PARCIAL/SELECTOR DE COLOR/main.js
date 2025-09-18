const boton = document.getElementById("cambiarColor");

const colores = ["black", "white"];

boton.addEventListener("click", () => {
    // Elegir un color al azar del arreglo
    const color = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = color;
});