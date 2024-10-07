"use strict";

// <!--
// 1. Crea unha variable que almacene un día da semana de luns a domingo. En función
// do valor da variable mostra unha mensaxe indicando se o día é laborable ou non.
let dia = "sabado";

switch (dia) {
  case "lunes":
    console.log("Lunes é laborable");
    break;
  case "martes":
    console.log("Martes é laborable");
    break;
  case "miercoles":
    console.log("Miercoles é laborable");
    break;
  case "jueves":
    console.log("Jueves é laborable");
    break;
  case "viernes":
    console.log("Viernes é laborable");
    break;

  case "sabado":
    console.log("Sabado non é laborable");
    break;
  case "domingo":
    console.log("Domingo non é laborable");
    break;

  default:
    console.log("Dia non seleccionado");
    break;
}

// 2. Crea 3 variables e inicialízaas con 3 números diferentes. Mostra por pantalla o maior
// dos 3 números.

let num1 = 10;
let num2 = 20;
let num3 = 30;

console.log(Math.max(num1, num2, num3));

// 3. Escribe os números pares do 0 ao 30, incluídos.

let nums = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30,
];
let pares = [];
for (const num of nums) {
  if (num % 2 != 1) {
    pares.push(num);
  }
}
console.log(pares);

// 4. Escribe as potencias de 2, dende 2⁰ ata 2^20
// . Para cada potencia debe saír un texto
// similar a “2 elevado a 0 = 1”.

let pot = 2;
let maxPot = 20;

for (let i = 0; i <= maxPot; i++) {
  console.log(`${pot} elevado a ${i} =  ${pot ** i}`);
}

// 5. Inicializa unha variable a un número, calcula o seu factorial e mostra a resultado por
// consola. (5! = 5*4*3*2*1).

let numero = 5;
let fact = 1;
for (let i = numero; i > 0; i--) {
  fact *= i;
}
console.log(fact);

// 6. Cálculo do IMC (índice de masa corporal). IMC = peso (kg) / [estatura (m)]^2
// a. Almacena en variables o peso e altura de dúas persoas.

let peso1 = 60;
let alt1 = 1.6;
let peso2 = 90;
let alt2 = 1.8;

// b. Calcula o IMC das dúas persoas.
let imc1 = (peso1 / [alt1 ** 2]).toFixed(2);
console.log(imc1);

let imc2 = (peso2 / [alt2 ** 2]).toFixed(2);
console.log(imc2);

// c. Indica que persoa ten o maior IMC cunha cadea similar a: 'O IMC (25.3) da
// primeira persoa é maior que o da segunda persoa (22.5)!
// -->

if (imc1 > imc2)
  console.log(
    `O IMC (${imc1}) da primeira persoa e maior que o da segunda persoa (${imc2})`
  );
else if (imc2 > imc1) {
  console.log(
    `O IMC (${imc2}) da segunda persoa e maior que o da primeira persoa (${imc1})`
  );
} else console.log("Os IMC son iguais");
