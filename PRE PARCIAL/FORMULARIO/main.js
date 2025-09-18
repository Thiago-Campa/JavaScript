const form = document.getElementById("registro");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("password");

const errorNombre = document.getElementById("errorNombre");
const errorEmail = document.getElementById("errorEmail");
const errorPassword = document.getElementById("errorPassword");

// Funciones de validación simples
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

// Validación en tiempo real
nombre.addEventListener("input", validarNombre);
email.addEventListener("input", validarEmail);
password.addEventListener("input", validarPassword);

// Al enviar el formulario
form.addEventListener("submit", (e) => {
    e.preventDefault(); // evitar recargar la página

    const nombreValido = validarNombre();
    const emailValido = validarEmail();
    const passwordValido = validarPassword();

    if (nombreValido && emailValido && passwordValido) {
        // Guardar en localStorage
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
