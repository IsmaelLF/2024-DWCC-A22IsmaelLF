"use strict";

// 2. Dado o seguinte código, escribe o corpo da función imprimirResultado() para que
// chame á función wait e imprima o resultado da promesa que devolve.
// async function wait() {
// await new Promise((resolve) => setTimeout(resolve, 3000));
// return 10;
// }
// function imprimirResultado() {
// Recorda, aquí non se pode usar "await"
// ¿que escribir aquí?
// }
// imprimirResultado();

async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return 10;
}
function imprimirResultado() {
  wait().then((response) => console.log(response));
}
imprimirResultado();
