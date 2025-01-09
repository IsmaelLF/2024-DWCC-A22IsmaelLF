let taboa8 = document.getElementById("taboaOrdenar");
let tbody = taboa8.querySelector("tbody");
let rows = Array.from(tbody.querySelectorAll("tr"));

rows.sort((a, b) => {
  let primeiro = a.querySelector("td:first-of-type").textContent;
  let segundo = b.querySelector("td:first-of-type").textContent;
  return primeiro.localeCompare(segundo);
});

rows.forEach((row) => {
  tbody.appendChild(row);
});
