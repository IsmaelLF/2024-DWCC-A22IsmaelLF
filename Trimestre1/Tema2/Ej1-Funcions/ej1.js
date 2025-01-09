"use strict";

// 1. Crea unha función frecha que devolva o cubo dun número pasado como parámetro.

const cubo = (num) => Math.pow(3, num);
console.log(cubo(3));

// 2. Crea unha función frecha á que se lle pase un array e devolva como resultado un
// array cos elementos impares do array de entrada.
// const arrayEntrada = [10, 2, 3, 5, 7, 8, 23, 50];
// console.log(numerosImpares(arrayEntrada)); // (4) [3, 5, 7, 23]

const arrayImpares = (arrNums) => {
  let impares = [];
  for (const num of arrNums) {
    num % 2 == 1 ? impares.push(num) : "";
  }
  console.log(impares);
};
arrayImpares([10, 2, 3, 5, 7, 8, 23, 50]);

// 3. Crea unha función frecha que sume todos os valores pasados como parámetros,
// sendo estes un número indeterminado.

const sumarTodos = (...args) => {
  let total = 0;

  for (const num of args) {
    total += num;
  }
  console.log(total);
};
sumarTodos(1, 2, 3, 4, 5);

// 4. Crea unha función á que se lle pasen varios números como parámetros (un número
// indeterminado de parámetros) e que devolva a media deses números.

const mediaNums = (...args) => {
  let total = 0;
  let nums = 0;

  for (const num of args) {
    total += num;
    nums++;
  }
  let media = (total / nums).toFixed(2);
  console.log(media);
};
mediaNums(1, 2, 3, 4, 5);
// 5. Crea unha función frecha chamada minMax() que reciba como parámetro un array
// de números e devolva un obxecto co valor mínimo e máximo do array de entrada:
// console.log(minMax([1, 2, 3, 4, 5])); // Debe devolver { min: 1, max: 5 }

const minMax = (arrayNums) => ({
  min: Math.min(...arrayNums),
  max: Math.max(...arrayNums),
});

console.log(minMax([1, 2, 3, 4, 5]));
// 6. Crea unha función autoinvocada á que se lle pase a lonxitude e ancho dun
// rectángulo. A función debe mostrar por consola unha mensaxe indicando o valor da
// área do rectángulo.

(function (lonx, ancho) {
  console.log(lonx * ancho);
})(2, 3);
// 7. Crea unha función á que se lle pase un DNI (ex: 12345678w ou 87654321T) e
// devolva se é correcto ou non.

const checkDNI = (dni) => {
  let arr = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
    "T",
  ];
  let numsDNI = dni.slice(0, length - 1);
  let letraDNI = dni.slice(length - 1);
  let letraCorrecta = arr[numsDNI % 23];

  letraDNI == letraCorrecta
    ? console.log("DNI Valido")
    : console.log("DNI No Valido");
};
checkDNI("12345678w");
checkDNI("78808940S");

// 8. Crea unha función que reciba como parámetro unha cantidade enteira e faga o
// desglose do número de billetes e moedas necesarios para obtela. Debe usarse o
// número mínimo de billetes e moedas.

const billetesMonedas = (cantidadTotal) => {
  const cantidades = [500, 200, 100, 50, 20, 10, 5, 2, 1];
  let numBilletes = {};

  for (const cantidad of cantidades) {
    const cantidadActual = Math.floor(cantidadTotal / cantidad);

    if (cantidadActual > 0) {
      numBilletes[cantidad] = cantidadActual;
      cantidadTotal -= cantidad * cantidadActual;
    }
  }
  return numBilletes;
};
console.log(billetesMonedas(1553));

// 9. Crea unha función chamada buscarPatron(texto, patron) que reciba como
// parámetros un texto e un patrón. A función debe devolver como resultado o número
// de veces que aparece o patrón no texto, tendo en conta que un carácter pode formar
// parte de máis dun patrón encontrado.

const buscarPatron = (texto, patron) => {};

// 10. Crea unha función JavaScript que comprobe se é posible axendar unha reunión
// dentro do horario laboral.
// A estrutura da función e do programa proporciónanse a continuación. O seguinte
// código inclúe comprobacións con assert, que mostrarán por pantalla unha mensaxe
// en caso de que a aserción sexa falsa. É dicir, se a comprobación é correcta, o
// programa non mostrará ningunha mensaxe:
// const inicioXornada = "07:30";
// const finalXornada = "17:45";
//  function axendarReunion(horaInicioReunion, duracionEnMinutos) {
// A función debe devolver true se a reunión ocorre dentro da xornada laboral
// e false en caso contrario
// // }
// Comprobacións
// console.assert(axendarReunion("7:00", 15) == false,
// 'Fallo comprobando axendarReunión("7:00", 15) == false'
// );
// console.assert(axendarReunion("7:15", 30) == false,
// 'Fallo comprobando axendarReunión("7:15", 30) == false'
// );
// console.assert(axendarReunion("7:30", 30) == true,
// 'Fallo comprobando axendarReunión("7:30", 30) == true'
// );
// console.assert(axendarReunion("11:30", 60) == true,
// 'Fallo comprobando axendarReunion("11:30", 60) == true'
// );
// console.assert(axendarReunion("17:00", 45) == true,
// 'Fallo comprobando axendarReunion("17:00", 45) == true'
// );
// console.assert(axendarReunion("17:30", 30) == false,
// 'Fallo comprobando axendarReunion("17:30", 30) == false'
// );
// 10
// Funcións
// 11. Crea unha función que reciba un array bidimensional de lonxitude variable que se
// corresponda cun escenario do xogo de Buscaminas. Este array almacenará un -1
// nas posicións onde hai minas e un 0 en caso contrario. A función debe devolver un
// array bidimensional onde cada posición que non teña mina, debe ter a información
// do número de minas adxacentes (diagonal, horizontal e vertical).
//
