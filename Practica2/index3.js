const personas = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 35 },
  { nombre: "María", edad: 28 }
];
const luis = personas.find(persona => persona.nombre === "Luis");
console.log("Persona encontrada:", luis);
console.log("\nLista de personas:");
personas.forEach(persona => {
  console.log(persona.nombre + " tiene " + persona.edad + " años.");
});
const sumaDeEdades = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
console.log("\nSuma total de edades:", sumaDeEdades);