
import { restar } from './utils.js';
console.log("--- Pruebas de la función restar ---");
let resultado1 = restar(15, 5);
console.log(`15 - 5 = ${resultado1}`);
let resultado2 = restar(7, 20);
console.log(`7 - 20 = ${resultado2}`);
let resultado3 = restar(-10, 3);
console.log(`-10 - 3 = ${resultado3}`);
let resultado4 = restar(-8, -8);
console.log(`-8 - (-8) = ${resultado4}`);
let resultado5 = restar(50, 0);
console.log(`50 - 0 = ${resultado5}`);
console.log("\n--- ¡Todas las pruebas han finalizado! ---");