//ARRASTRAR Y SOLTAR
const caja1 = document.getElementById("caja1");
const caja2 = document.getElementById("caja2");
const contenedores = document.querySelectorAll(".contenedor");

caja1.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text", e.target.id);
});

contenedores.forEach(contenedor => {
    contenedor.addEventListener("dragover", (e) => {
        e.preventDefault(); 
    });

    contenedor.addEventListener("drop", (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData("text");
        const elemento = document.getElementById(id);
        contenedor.appendChild(elemento);
    });
});


//BUSQUEDA TIEMPO REAL------------------------------------------------------------------
const buscador = document.getElementById("buscador");
const resultados = document.getElementById("resultados");

const nombres = ["Thiago", "Ana", "Lucía", "Pedro", "María", "Juan", "Carla", "Sofía"];

function mostrarResultados(lista) {
    resultados.innerHTML = ""; 
    lista.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        resultados.appendChild(li);
    });
}

buscador.addEventListener("input", () => {
    const texto = buscador.value.toLowerCase();
    const filtrados = nombres.filter(nombre => nombre.toLowerCase().includes(texto));
    mostrarResultados(filtrados);
});

mostrarResultados(nombres);


//FORMULARIO--------------------------------------------------------------------
const form = document.getElementById("registro");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("password");

const errorNombre = document.getElementById("errorNombre");
const errorEmail = document.getElementById("errorEmail");
const errorPassword = document.getElementById("errorPassword");

function validarNombre() {
    if (nombre.value.trim().length < 3) {
        errorNombre.textContent = "El nombre debe tener al menos 3 caracteres";
        return false;
    }
    errorNombre.textContent = "";
    return true;
}

function validarEmail() {
    const regex = /^\S+@\S+\.\S+$/;
    if (!regex.test(email.value)) {
        errorEmail.textContent = "Email no válido";
        return false;
    }
    errorEmail.textContent = "";
    return true;
}

function validarPassword() {
    if (password.value.length < 6) {
        errorPassword.textContent = "La contraseña debe tener al menos 6 caracteres";
        return false;
    }
    errorPassword.textContent = "";
    return true;
}

nombre.addEventListener("input", validarNombre);
email.addEventListener("input", validarEmail);
password.addEventListener("input", validarPassword);

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombreValido = validarNombre();
    const emailValido = validarEmail();
    const passwordValido = validarPassword();

    if (nombreValido && emailValido && passwordValido) {
        const usuario = {
            nombre: nombre.value,
            email: email.value,
            password: password.value
        };
        localStorage.setItem("usuario", JSON.stringify(usuario));

        alert("¡Registro exitoso!");
        form.reset();
    }
});


//MODAL------------------------------------------------------------------------
const abrir = document.getElementById("abrir");
const cerrar = document.getElementById("cerrar");
const modal = document.getElementById("modal");

abrir.addEventListener("click", () => {
    modal.classList.remove("oculto");
});

cerrar.addEventListener("click", () => {
    modal.classList.add("oculto");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("oculto");
    }
});


//SELECCION DE TEMA-----------------------------------------------------------
const boton = document.getElementById("cambiarColor");
const colores = ["black", "white"];

boton.addEventListener("click", () => {
    const color = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = color;
});


//TABLA DINAMICA------------------------------------------------------------------------
const tabla = document.getElementById("tabla").querySelector("tbody");
const form = document.getElementById("formAgregar");
const inputNombre = document.getElementById("nombre");
const inputNota = document.getElementById("nota");

const estudiantes = [
    { nombre: "Thiago", nota: 9 },
    { nombre: "Ana", nota: 7 },
    { nombre: "Pedro", nota: 5 },
    { nombre: "Lucía", nota: 8 }
];


function mostrarTabla() {
    tabla.innerHTML = "";
    estudiantes.forEach((est, index) => {
        const fila = document.createElement("tr");

        const celdaNombre = document.createElement("td");
        celdaNombre.textContent = est.nombre;
        fila.appendChild(celdaNombre);

        const celdaNota = document.createElement("td");
        celdaNota.textContent = est.nota;
        fila.appendChild(celdaNota);

        const celdaAcciones = document.createElement("td");
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";

        btnEliminar.addEventListener("click", () => {
            estudiantes.splice(index, 1);
            mostrarTabla();
        });

        celdaAcciones.appendChild(btnEliminar);
        fila.appendChild(celdaAcciones);

        tabla.appendChild(fila);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = inputNombre.value.trim();
    const nota = Number(inputNota.value);

    if (nombre && nota >= 1 && nota <= 10) {
        estudiantes.push({ nombre, nota });
        mostrarTabla();
        form.reset();
    } else {
        alert("Por favor, ingresa un nombre y una nota válida (1-10).");
    }
});

mostrarTabla();

//TOOLTIPS-------------------------------------------------------------------------------------------
const tooltip = document.createElement("div");
tooltip.className = "tooltip-box";
document.body.appendChild(tooltip);

const elements = document.querySelectorAll("[data-tooltip]");

elements.forEach(el => {
    el.addEventListener("mouseenter", (e) => {
        tooltip.textContent = el.getAttribute("data-tooltip");
        tooltip.style.opacity = "1";
    });

    el.addEventListener("mousemove", (e) => {
        tooltip.style.left = e.pageX + 10 + "px";
        tooltip.style.top = e.pageY + 10 + "px";
    });

    el.addEventListener("mouseleave", () => {
        tooltip.style.opacity = "0";
    });
});

//CONTADOR PERSISTENT-----------------------------------------------------------
const contadorSpan = document.getElementById("contador");
const boton = document.getElementById("boton");
const reset = document.getElementById("reset");

let contador = Number(localStorage.getItem("contador")) || 0;
contadorSpan.textContent = contador;

boton.addEventListener("click", () => {
  contador++;
  contadorSpan.textContent = contador;
  localStorage.setItem("contador", contador); 
});

reset.addEventListener("click", () => {
  contador = 0;
  contadorSpan.textContent = contador;
  localStorage.setItem("contador", contador);
});
