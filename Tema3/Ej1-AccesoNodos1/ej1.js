// ● A táboa con id="age-table".
// ● Todos os elementos label dentro da táboa (debería haber 3).
// ● O primeiro td da táboa.
// ● O formulario con name="search".
// ● O primeiro input do formulario anterior.
// ● O último input do formulario do apartado anterior.

let ageTable = document.getElementById("age-table");

console.log(ageTable);

let elementosTaboa = ageTable.getElementsByTagName("label");

console.log(elementosTaboa);

let primeiroTd = ageTable.querySelector("td");

console.log(primeiroTd);

let formSearch = document.forms["search"];

console.log(formSearch);

let ultimoInput = formSearch.children[1];

console.log(ultimoInput);
