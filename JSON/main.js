//JSON

const usuario = {
    nombre: "Thiago",
    edad: 22,
}

const usuarioJSON = JSON.stringify(usuario);
console.log(usuarioJSON); //se ve como strings

console.log(usuario) //se ve como objeto

localStorage.setItem("usuario", usuarioJSON);

const usaurioEnLocalStorage = localStorage.getItem("usuario");
const usaurioObjeto = JSON.parse(usaurioEnLocalStorage);
console.log(usaurioObjeto);