const caja1 = document.getElementById("caja1");
const caja2 = document.getElementById("caja2");
const contenedores = document.querySelectorAll(".contenedor");

// Cuando empieza a arrastrar
caja1.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text", e.target.id);
});

// Hacer que todos los contenedores acepten drop
contenedores.forEach(contenedor => {
    contenedor.addEventListener("dragover", (e) => {
        e.preventDefault(); // necesario para permitir drop
    });

    contenedor.addEventListener("drop", (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData("text");
        const elemento = document.getElementById(id);
        contenedor.appendChild(elemento); // movemos la caja al contenedor donde se suelta
    });
});
