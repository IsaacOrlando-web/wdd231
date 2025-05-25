const user = document.querySelector("#userName").value;
const joinBtn = document.querySelector("#joinbtn");
const users = ["isaac", "admin", "Admin", "juan", "alberto"];

function verificarUsuario(usuario){
    return new Promise((resolve) =>{
        setTimeout(() => {
            if(users.includes(usuario)){
                resolve(true);
            }else{
                resolve(false);
            }
        });
    });
}

function verificarContrasena(esUsuarioValido){
    return new Promise((resolve, reject) => {
        if (esUsuarioValido) {
            setTimeout(() => resolve("¡Bienvenido, admin!"), 1000);
        } else {
            reject("Usuario no válido");
        }
    });
}

async function iniciarSesion(usuario) {
    try {
        const esUsuarioValido = await verificarUsuario(usuario);
        const mensaje = await verificarContrasena(esUsuarioValido);
        document.querySelector("#demo").innerHTML = mensaje;
    } catch (error) {
        document.querySelector("#demo").innerHTML = error;
    }
}

joinBtn.addEventListener("click", () => {
    const user = document.querySelector("#userName").value;
    iniciarSesion(user);
});
