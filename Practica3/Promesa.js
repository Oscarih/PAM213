function verificarUsuario(usuario) {
  return new Promise((resolve, reject) => {
    if (usuario === "admin") {
      resolve("Acceso concedido");
    } else {
      reject("Acceso denegado");
    }
  });
}
console.log("Intentando con 'admin'...");
verificarUsuario("admin")
  .then(res => console.log(res))
  .catch(err => console.error(err));

console.log("\nIntentando con 'Ivan'...");
verificarUsuario("Ivan")
  .then(res => console.log(res))
  .catch(err => console.error(err));