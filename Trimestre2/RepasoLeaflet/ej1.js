"use strict";

const map = L.map("map");

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);

map.locate({ setView: true, zoom: 17 });
let tooltip = L.tooltip();
let marker = null;
function onMapClick(e) {
  tooltip.setContent(
    "Agora mesmo atopaste en  <br>" +
      "<b>lon:</b> " +
      e.latlng.lng.toFixed(6) +
      "<br>" +
      "<b>lat:</b> " +
      e.latlng.lat.toFixed(6)
  );
  if (marker === null) {
    marker = L.marker(e.latlng, { draggable: true })
      .addTo(map)
      .bindTooltip(tooltip)
      .openTooltip();
  } else {
    marker.setLatLng(e.latlng).bindTooltip(tooltip).openTooltip();
  }
}
map.on("click", onMapClick);
