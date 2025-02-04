"use strict";
const listado = document.getElementById("listado");
let formInput = document.createElement("input");
let botonSubmit = document.createElement("button");
let marker = null;
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
  listado.appendChild(formInput);
  listado.appendChild(botonSubmit);
  // Poñer o foco unha vez creado
  formInput.focus();
  formInput.addEventListener("input", (e) => {
    console.log(formInput.value);
  });
}
map.on("click", mapClick);
