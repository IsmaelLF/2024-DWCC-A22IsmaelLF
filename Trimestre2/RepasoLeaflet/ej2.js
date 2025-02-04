"use strict";
const listado = document.getElementById("listado");
let formInput = document.createElement("input");
let botonSubmit = document.createElement("button");
formInput.classList.add("oculto");
botonSubmit.classList.add("oculto");
listado.appendChild(formInput);
listado.appendChild(botonSubmit);
let marker = null;
let arrayMarkers = [];
let tooltip = L.tooltip();
const map = L.map("map", {
  center: [42.8802049, -8.5447697, 13],
  zoom: 13,
});

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);

function mapClick(e) {
  marker = L.marker(e.latlng, { draggable: true }).addTo(map);
  botonSubmit.textContent = "Engadir";
  formInput.classList.remove("oculto");
  botonSubmit.classList.remove("oculto");
  // Poñer o foco unha vez creado
  formInput.focus();
}
formInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    marker.bindTooltip(`${formInput.value}`).openTooltip();
    arrayMarkers.push(marker["_latlng"]);
    let li = document.createElement("li");
    li.textContent = formInput.value;
    listado.appendChild(li);
    localStorage.setItem(
      `${formInput.value}`,
      JSON.stringify(marker["_latlng"])
    );
    formInput.value = "";
    formInput.classList.add("oculto");
    botonSubmit.classList.add("oculto");
  }
});
listado.addEventListener("click", (e) => {
  console.log(localStorage);

  // if (localStorage.includes(e.target.closest("li").textContent)) {
  //   console.log("aaaa");
  // }
});

listado.addEventListener("mouseover", () => {
  listado.style.cursor = "pointer";
});
map.on("click", mapClick);
