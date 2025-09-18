const abrir = document.getElementById("abrir");
const cerrar = document.getElementById("cerrar");
const modal = document.getElementById("modal");

// Abrir modal
abrir.addEventListener("click", () => {
    modal.classList.remove("oculto");
});

// Cerrar modal con botón X
cerrar.addEventListener("click", () => {
    modal.classList.add("oculto");
});

// Cerrar modal si se hace clic fuera del contenido
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("oculto");
    }
});
