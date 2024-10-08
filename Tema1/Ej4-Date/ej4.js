// 1. Mostra o día da semana (en letra) do 25 de xullo do ano actual.

let xul25 = new Date("25, Julio, 2024");

let b = xul25.getDay();
switch (b) {
  case 0:
    console.log("Domingo");

    break;
  case 1:
    console.log("Lunes");

    break;

  case 2:
    console.log("Martes");

    break;

  case 3:
    console.log("Miercoles");

    break;
  case 4:
    console.log("Jueves");

    break;

  case 5:
    console.log("Viernes");

    break;

  case 6:
    console.log("Sabado");

    break;
  default:
    break;
}

// 2. Crea unha función á que se lle pase un mes (1-12) e un ano e devolva o número de
// días dese mes.

const numDias = (mes, ano) => new Date(ano, mes, 0).getDate();

console.log(numDias(10, 2024));

// 3. Crea unha función á que se lle pase unha data e que devolva true se é fin de
// semana.

const finDeSemana = (fecha) => {
  let dia = new Date(fecha).getDay();
  console.log(dia);

  if (dia !== 0 && dia !== 6) {
    return false;
  } else {
    return true;
  }
};
console.log(finDeSemana("8, Octubre, 2024"));

// 4. Crea unha función que reciba unha data como parámetro e devolva o número de
// días que pasaron dende que comezou o ano.

const diasTranscurridos = (fecha) => {};
