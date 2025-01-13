const xhr = new XMLHttpRequest();
xhr.open(
  "get",
  "https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json"
);
xhr.responseType = "json";
xhr.send();

xhr.onload = function () {
  const gatos = xhr.response;

  let gatoTexto = gatos.map((gato) => {
    return gato.name;
  });
  let nomes = document.createElement("p");
  nomes.textContent = `Os nomes das gatas son ${gatoTexto[0]}, ${gatoTexto[1]} e ${gatoTexto[2]}`;
  document.body.appendChild(nomes);

  let kittens = gatos.map((michis) => {
    return michis.kittens;
  });
  let totalGatos = kittens[0].concat(kittens[1], kittens[2]);
  let machos = totalGatos.filter((gato) => gato.gender === "m");
  let femias = totalGatos.filter((gato) => gato.gender === "f");

  let textoMichis = document.createElement("p");
  textoMichis.textContent = `En total hai ${totalGatos.length} michis: ${machos.length} machos e ${femias.length} femias`;
  document.body.appendChild(textoMichis);
};
