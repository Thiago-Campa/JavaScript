const buscador = document.getElementById("buscador");
const resultados = document.getElementById("resultados");

// Array de ejemplo
const nombres = ["Thiago", "Ana", "Lucía", "Pedro", "María", "Juan", "Carla", "Sofía"];

// Mostrar resultados iniciales (opcional)
function mostrarResultados(lista) {
    resultados.innerHTML = ""; // limpiar resultados
    lista.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        resultados.appendChild(li);
    });
}

// Evento input para búsqueda en tiempo real
buscador.addEventListener("input", () => {
    const texto = buscador.value.toLowerCase();
    const filtrados = nombres.filter(nombre => nombre.toLowerCase().includes(texto));
    mostrarResultados(filtrados);
});

// Mostrar todos al inicio
mostrarResultados(nombres);
