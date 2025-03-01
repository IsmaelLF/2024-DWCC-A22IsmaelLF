"use strict";
const listado = document.getElementById("listado");
let formInput = document.createElement("input");
formInput.classList.add("oculto");
listado.appendChild(formInput);
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
  formInput.classList.remove("oculto");
  // Poñer o foco unha vez creado
  formInput.focus();
}
formInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
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
  }
});
listado.addEventListener("click", (e) => {
  if (e.target.matches("li")) {
    let liSeleccionado = e.target.closest("li").textContent;
    map.panTo(JSON.parse(localStorage[liSeleccionado]));
    // Esto está mal
    let popupEngadido = null;
    if (popupEngadido === null) {
      popupEngadido = L.popup()
        .setLatLng(JSON.parse(localStorage[liSeleccionado]))
        .setContent(liSeleccionado)
        .addTo(map);
    }
  }
});

// Esto está sin acabar 
listado.addEventListener("dblclick", (e) => {
  if (e.target.matches("li")) {
    for (const marcador of arrayMarkers) {
      map.panTo(marcador);
      console.log(marcador);
    }
  }
});

listado.addEventListener("mouseover", (e) => {
  if (e.target.matches("li")) {
    listado.style.cursor = "pointer";
  } else {
    listado.style.cursor = "default";
  }
});
map.on("click", mapClick);
