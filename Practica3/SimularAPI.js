function simularPeticionAPI() {
    return new Promise (resolve => {
        setTimeout(() =>{
            resolve("Datos recibidos correctamente");
        }, 5000);
    });
}

async function obtenerDatos() {
    console.log("Un momento necesito unos segundos más");
    const respuesta = await simularPeticionAPI();
    console.log(respuesta);
}
obtenerDatos();