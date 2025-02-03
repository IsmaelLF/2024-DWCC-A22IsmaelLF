"use strict";

const map = L.map("map");

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);

map.locate({ setView: true, zoom: 17 });

let popup = L.popup();
let marker = L.marker;
function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent(
      "Agora mesmo atopaste en  <br>" +
        "<b>lon:</b> " +
        e.latlng.lng.toFixed(6) +
        "<br>" +
        "<b>lat:</b> " +
        e.latlng.lat.toFixed(6)
    );
  // ARREGLAR MARCADOR
  marker(e.latlng)
    .addTo(map)
    .on("mouseout", (e) => e.target.remove())
    .bindPopup(popup)
    .openPopup();
}
map.on("click", onMapClick);
