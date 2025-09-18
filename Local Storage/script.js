//localStorage

localStorage.setItem("apellido", "Martines");

let usuraio = "Matias";
localStorage.setItem("usaurio", usuraio);

let usuarioEnLocalStorage = localStorage.getItem("usaurio");
console.log("el usuario que buscas es: " + usuarioEnLocalStorage)

let ingresarUsuario  = prompt("ingrese su nombre: ");
localStorage.setItem("usuario-ingresado", ingresarUsuario);

let usuarioIngresado = localStorage.getItem("usuario-ingresado");
console.log(usuarioIngresado)
