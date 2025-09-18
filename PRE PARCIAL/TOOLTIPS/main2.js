// Crear el div tooltip una sola vez
const tooltip = document.createElement("div");
tooltip.className = "tooltip-box";
document.body.appendChild(tooltip);

// Seleccionar todos los elementos con data-tooltip
const elements = document.querySelectorAll("[data-tooltip]");

elements.forEach(el => {
    el.addEventListener("mouseenter", (e) => {
        tooltip.textContent = el.getAttribute("data-tooltip");
        tooltip.style.opacity = "1";
    });

    el.addEventListener("mousemove", (e) => {
        // Seguir el mouse
        tooltip.style.left = e.pageX + 10 + "px";
        tooltip.style.top = e.pageY + 10 + "px";
    });

    el.addEventListener("mouseleave", () => {
        tooltip.style.opacity = "0";
    });
});
