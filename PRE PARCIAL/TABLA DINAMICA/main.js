const tabla = document.getElementById("tabla").querySelector("tbody");
const form = document.getElementById("formAgregar");
const inputNombre = document.getElementById("nombre");
const inputNota = document.getElementById("nota");

// Array de ejemplo
const estudiantes = [
    { nombre: "Thiago", nota: 9 },
    { nombre: "Ana", nota: 7 },
    { nombre: "Pedro", nota: 5 },
    { nombre: "Lucía", nota: 8 }
];



// Función para mostrar la tabla
function mostrarTabla() {
    tabla.innerHTML = ""; // Limpiar filas existentes

    estudiantes.forEach((est, index) => {
        const fila = document.createElement("tr");

        // Celda nombre
        const celdaNombre = document.createElement("td");
        celdaNombre.textContent = est.nombre;
        fila.appendChild(celdaNombre);

        // Celda nota
        const celdaNota = document.createElement("td");
        celdaNota.textContent = est.nota;
        fila.appendChild(celdaNota);

        // Celda acciones
        const celdaAcciones = document.createElement("td");
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";

        // Evento click para eliminar
        btnEliminar.addEventListener("click", () => {
            estudiantes.splice(index, 1); // eliminar del array
            mostrarTabla(); // actualizar tabla
        });

        celdaAcciones.appendChild(btnEliminar);
        fila.appendChild(celdaAcciones);

        tabla.appendChild(fila);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault(); // evitar recargar página
    const nombre = inputNombre.value.trim();
    const nota = Number(inputNota.value);

    if (nombre && nota >= 1 && nota <= 10) {
        estudiantes.push({ nombre, nota });
        mostrarTabla();
        form.reset(); // limpiar inputs
    } else {
        alert("Por favor, ingresa un nombre y una nota válida (1-10).");
    }
});

// Mostrar la tabla al inicio
mostrarTabla();
