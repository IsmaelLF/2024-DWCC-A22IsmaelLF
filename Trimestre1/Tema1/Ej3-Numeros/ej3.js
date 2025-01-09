// 1. Números aleatorios:
// a. Xera un número enteiro aleatorio entre 0 e 3 (incluídos).
// b. Xera un número enteiro aleatorio entre 1 e 3 (incluídos).
// c. Crea unha función que devolva un número aleatorio entre os dous valores
// pasados como parámetros. Así, por exemplo, a seguinte instrución debe
// mostrar un número aleatorio entre 5 e 10 (incluídos):
// console.log(numeroAleatorio(5, 10));

//a
let rand1 = Math.round(Math.random() * 3);
console.log(rand1);

//b
let rand2 = Math.ceil(Math.random() * 3);
console.log(rand2);

//c

const rand3 = (min, max) => Math.round(Math.random() * (max - min) + min);
console.log(rand3(5, 10));

// 2. Crea unha función á que se lle pase como parámetro o número de minutos e
// devolva un string indicando a súa equivalencia en horas e minutos.

const horasMins = (mins) => {
  let horas = Math.floor(mins / 60);
  let minutosSobrantes = Math.round(mins % 60);
  console.log(`${horas} horas e ${minutosSobrantes} minutos`);
};
horasMins(119);

// 3. Crea unha función que dado o radio dun círculo, devolva a súa área. E fai outra
// función que reciba o radio e devolva o perímetro do círculo. Mostra por consola o
// resultado das funcións usando dúas cifras decimais.

const area = (r) => (Math.PI * Math.pow(r, 2)).toFixed(2);

console.log(area(4));

const perimetro = (r) => (2 * Math.PI * r).toFixed(2);

console.log(perimetro(4));
