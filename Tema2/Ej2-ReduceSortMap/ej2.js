// 1. Dado o seguinte array:
const persoas = [
  { nome: "aaron", idade: 65, id: 1 },
  { nome: "beth", idade: 2, id: 2 },
  { nome: "ánxeles", idade: 13, id: 3 },
  { nome: "daniel", idade: 3, id: 4 },
  { nome: "ada", idade: 25, id: 5 },
  { nome: "erea", idade: 1, id: 6 },
  { nome: "navia", idade: 43, id: 7 },
];
// a. Crea un novo array que conteña só as persoas maiores de idade.

let maioresEdad = persoas.filter(({ idade }) => idade > 18);
console.log(maioresEdad);

// b. Crea un novo array que conteña os nomes (só os nomes) de todas as
// persoas.

let nomes = persoas.map(({ nome }) => nome);

console.log(nomes);

// c. Crea un novo array que conteña, en maiúsculas, os nomes das persoas
// maiores de idade.
let maiusculasMaioresEdad = persoas
  .filter(({ idade }) => idade > 18)
  .map(({ nome }) => nome.toUpperCase());

console.log(maiusculasMaioresEdad);

// d. Crea un novo array que conteña obxectos só co id e o nome das persoas.

let arrayIdMaisNome = persoas.map(({ nome, id }) => ({ [nome]: id }));

console.log(arrayIdMaisNome);

// 2. Dado un array cos días da semana en minúsculas:

const diasSemana = [
  "luns",
  "martes",
  "mercores",
  "xoves",
  "venres",
  "sabado",
  "domingo",
];
// a. Obtén un novo array cos días que empecen por “m” e móstrao por consola.

let diasPorM = diasSemana.filter((dia) => dia.startsWith("m"));
console.log(diasPorM);

// b. Mostra unha mensaxe indicando se algún día comeza por ‘s’.
let booleanoEmpezaPorS = diasSemana.some((dia) => dia.startsWith("s"));

console.log(booleanoEmpezaPorS);

// c. Mostra unha mensaxe indicando se todos os días acaban en ‘s’.
let todosAcabanEnS = diasSemana.every((dia) => dia.endsWith("s"));
console.log(todosAcabanEnS);

// d. Mostra por consola o primeiro día que empece por “m”.
let primeiroEmpezandoPorM = diasSemana.find((dia) => dia.startsWith("m"));
console.log(primeiroEmpezandoPorM);

// e. Mostra por consola a posición no array do primeiro día que empeza por “m”.
let primeiroIndiceEmpezandoPorM = diasSemana.findIndex(
  (dia) => dia.charAt(0) == "m"
);

console.log(primeiroIndiceEmpezandoPorM);

// f. Crea un novo array cos días da semana en maiúsculas

let diasEnMaiuscula = diasSemana.map((dia) => dia.toUpperCase());
console.log(diasEnMaiuscula);

// 3. Fai unha función que ordene as notas dun array pasado como parámetro. Por
// exemplo, se se pasa o array [4,8,3,10,5] debe devolver [3,4,5,8,10]. Debes utilizar a
// función sort e pasarlle como parámetro unha función que ti definas que serva para
// realizar a comparación de elementos.

const arr = [4, 8, 3, 10, 5];

arr.sort((a, b) => a - b);
console.log(arr);

// 4. Dado un array de números, obtén o valor máis alto. (Usa algunha das funcións para
// traballar con arrays).

arr.sort((a, b) => b - a);
console.log(arr[0]);

// 5. Dada a seguinte información:
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];
// a. Filtra o array de inventores e crea un array só cos inventores que naceron no
// século XVI.
// 1501-1600

let inventoresSXVI = inventors.filter(
  ({ year }) => year > 1501 && year <= 1600
);
console.log(inventoresSXVI);

// b. Crea un array co nome completo dos inventores: ["Albert Einstein", "Isaac
// Newton", ...]

let nomeCompletoInventores = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);
console.log(nomeCompletoInventores);

// c. Unha vez obtido o array co nome completo dos inventores do exercicio
// anterior, ordénao alfabeticamente polo apelido.

let nomeCompletoInventoresOrdenadoApellidos = nomeCompletoInventores.sort(
  (a, b) => {
    const apellido1 = a.split(" ").pop();
    const apellido2 = b.split(" ").pop();
    return apellido1.localeCompare(apellido2);
  }
);
console.log(nomeCompletoInventoresOrdenadoApellidos);

// d. Ordena alfabeticamente polo apelido o array de obxectos inventores inicial.

let inventoresOrdenadoApellidos = inventors.sort((a, b) => {
  const apelido1 = a.last;
  const apelido2 = b.last;
  return apelido1.localeCompare(apelido2);
});

console.log(inventoresOrdenadoApellidos);

// e. Ordena o array de inventores pola data de nacemento.
let inventoresOrdenadosDataNacemento = inventors.sort((a, b) => {
  return a.year - b.year;
});

console.log(inventoresOrdenadosDataNacemento);

// f. Calcula a suma dos anos que viviron todos os inventores.
let sumaDosAnosQueViviron = inventors
  .map((inventor) => inventor.passed - inventor.year)
  .reduce((acc, currVal) => (acc += currVal));

console.log(sumaDosAnosQueViviron);

// g. Ordena os inventores polos anos que viviron, primeiro o máis lonxevo

let ordenarPorLonxevidade = inventors.sort(
  (a, b) => b.passed - b.year - (a.passed - a.year)
);

console.log(ordenarPorLonxevidade);

// 6. Dada a seguinte información, obtén un obxecto con unha propiedade para cada
// medio de transporte, indicando o número de veces que se repite no array. É dicir, o
// resultado debería ser {car: 5, truck: 3, bike: 2, walk: 2, van: 2, pogostick: 1}. Intentar
// facer o exercicio usando o método reduce
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
  "pogostick",
];

let numeroRepeticions = data.reduce((acc, currVal) => {
  if (acc[currVal]) {
    acc[currVal] += 1;
  } else acc[currVal] = 1;

  return acc;
}, {});

console.log(numeroRepeticions);
