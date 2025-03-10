"use strict";

let inputFiltro = document.createElement("input");
inputFiltro.setAttribute("id", "inputFiltro");
document.body.appendChild(inputFiltro);
inputFiltro.placeholder = "Filtra municipios...";
let tabla = document.createElement("table");
let thead = document.createElement("thead");
thead.innerHTML = `
  <tr>
    <th>Municipio</th>
    <th>Habitantes</th>
    <th>Densidad</th>
    <th>Superficie</th>
    <th>Código Municipio</th>
  </tr>`;
tabla.appendChild(thead);
document.body.appendChild(tabla);

async function getMunicipios() {
  try {
    const response = await fetch("./coruna.json");

    if (!response.ok) {
      throw new Error(response.status);
    }

    let jsonData = await response.json();

    jsonData.forEach((element) => {
      let trElementos = document.createElement("tr");

      let tdDenominacion = document.createElement("td");
      tdDenominacion.textContent = element.Denominación;

      let tdHabitantes = document.createElement("td");
      tdHabitantes.textContent = element.Habitantes;

      let tdDensidad = document.createElement("td");
      tdDensidad.textContent = element.Densidad;

      let tdSuperficie = document.createElement("td");
      tdSuperficie.textContent = element.Superficie;

      let tdCodigoMunicipio = document.createElement("td");
      tdCodigoMunicipio.textContent = element["Codigo Municipio"];

      tabla.appendChild(trElementos);
      trElementos.appendChild(tdDenominacion);
      trElementos.appendChild(tdHabitantes);
      trElementos.appendChild(tdDensidad);
      trElementos.appendChild(tdSuperficie);
      trElementos.appendChild(tdCodigoMunicipio);

      trElementos.addEventListener("click", () => {
        if (trElementos.lastElementChild.nodeName !== "P") {
          for (const propiedad in element) {
            let pInfoRestante = document.createElement("p");
            pInfoRestante.textContent = `${propiedad} : ${element[propiedad]} `;
            trElementos.appendChild(pInfoRestante);
          }
        }
      });
      // FILTRO
      inputFiltro.addEventListener("input", (e) => {
        let municipiosMinuscula = element.Denominación.toLowerCase();
        if (municipiosMinuscula.includes(e.target.value.toLowerCase())) {
          trElementos.style.display = "table-row";
        } else {
          trElementos.style.display = "none";
        }
      });
      // ENSEÑAR TODA A INFO
    });
    // tabla.addEventListener("click", (e) => {
    //   jsonData.forEach((element) => {
    //     console.log(element);
    //   });
    //   console.log(e.target.closest("tr"));
    // });
  } catch (error) {
    console.log(error);
  }
}

getMunicipios();
