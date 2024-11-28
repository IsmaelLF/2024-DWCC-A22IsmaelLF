// Escribe unha función crearCalendario(elemento, ano, mes) que engada ao
// elemento pasado como parámetro un calendario
// do ano e mes indicados.
// O calendario debe ser unha táboa, onde cada
// semana é un <tr> e cada día un <td>. A
// cabeceira da táboa está creada con <th>.
// Por exemplo, o calendario resultado de chamar á
// función cos seguintes parámetros vese na imaxe
// seguinte. Observar que se aplicaron estilos CSS
// para mellorar o aspecto.
// crearCalendario(calendario, 2022, 11);

const crearCalendario = function (selector, ano, mesIntroducido) {
  let table = `<table id="tablaCalendario"<thead><th>L</th><th>M</th><th>Me</th><th>X</th><th>V</th><th>S</th><th>D</th></thead><tr>`;

  const mes = mesIntroducido - 1;
  let diaActual = new Date(ano, mes, 1);
  const primerDiaSemana = diaActual.getDay();

  let contador = 7 - diaActual.getDay() + 1;
  for (let i = 0; i < primerDiaSemana - 1; i++) {
    table += "<td></td>";
  }

  while (diaActual.getMonth() === mes) {
    if (diaActual.getDay() === 1) {
      table += "<tr>";
    }
    table += `<td>${diaActual.getDate()}</td>`;

    if (diaActual.getDay() === 0) {
      table += "</tr>";
    }

    diaActual.setDate(diaActual.getDate() + 1);
  }

  contador = 7 - diaActual.getDay() + 1;
  for (let i = 0; i < contador; i++) {
    table += "<td></td>";
  }

  table += "</tr></table>";
  const elemento = document.createElement(`${selector}`);
  elemento.innerHTML = table;

  document.body.insertAdjacentElement("beforeend", elemento);
};

crearCalendario("div", 2023, 12);
