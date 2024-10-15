// 1. Crea unha función que reciba un elemento e un array como parámetros. A función
// debe devolver un novo array que conteña os índices onde aparece ese elemento no
// array.
// Exemplo:
// const numeros = [1, 3, 5, 1, 4, 1, 6, 8, 10, 1];
// function indices(elemento, arrayElementos) {
// …
// }
// console.log(indices(1, numeros)); // (4) [0, 3, 5, 9]
// 10

const findIndex = (elem, array) => {
  let novoArray = [];
  let index = array.indexOf(elem);
  while (index !== -1) {
    novoArray.push(index);
    index = array.indexOf(elem, index + 1);
  }
  console.log(novoArray);
};
findIndex(1, [1, 3, 5, 1, 4, 1, 6, 8, 10, 1]); // (4) [0, 3, 5, 9]

// 2. Dado o array froitas (const froitas = ['peras', 'mazás', 'kiwis', 'plátanos',
// 'mandarinas'];) , fai os seguintes apartados co método splice:
// a. Elimina as mazás.
// b. Engade laranxas e sandía detrás dos plátanos,.
// c. Quita os kiwis e pon no seu lugar cereixas e nésperas.
// Despois de realizar cada operación mostra por pantalla a lista de froitas do array
// separadas por unha coma e un espazo. Por exemplo, inicialmente o array debe
// mostrarse como “peras, mazás, kiwis, plátanos, mandarinas”.

const froitas = ["peras", "mazás", "kiwis", "plátanos", "mandarinas"];

// a

froitas.splice(1, 1);

console.log(froitas.join(", "));

// b

froitas.splice(froitas.indexOf("plátanos") + 1, 0, "laranxas", "sandia");

console.log(froitas.join(", "));

froitas.splice(1, 1, "cereixas", "nésperas");

console.log(froitas.join(", "));

// 3. Crea unha función á que se lle pase unha frase con varias palabras e devolva a
// mesma frase coa primeira letra de cada palabra en maiúsculas e o resto de letras en
// minúsculas.

const firstCap = (frase) => {
  let arr = frase.split(" ");
  let primCap;
  for (const palabra of arr) {
    primCap = palabra
      .toLowerCase()
      .replace(palabra.charAt(0), palabra.charAt(0).toUpperCase());
    arr.splice(arr.indexOf(palabra), 1, primCap);
  }
  console.log(arr.toString().replaceAll(",", " "));
};
firstCap("hola qUe tal ");
