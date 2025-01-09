// Descarga o código fonte 03-propiedadesNodo01.html e indica, polo menos, unha
// forma de acceder ao seguinte contido e mostralo por consola:
// ● O innerHTML, innerText e textContent da etiqueta “Escolle sexo”:
// ● O valor do primeiro input de sexo
// ● O valor do sexo que estea seleccionado.
// ● O texto de cada un dos elementos <li>
// ● Indica cantos elementos <li> hai.
// ● Indica o valor do atributo data-widget-name

let sexLabel =
  document.body.lastElementChild.previousElementSibling.lastElementChild
    .previousElementSibling;

console.log(sexLabel);

let primeiroSexo = sexLabel.firstElementChild.nextElementSibling.value;

console.log(primeiroSexo);

let sexoSeleccionado = sexLabel.querySelector(
  "input[type=radio]:checked"
).value;

console.log(sexoSeleccionado);

let textoCadaLi = document.querySelectorAll("li");
for (const li of textoCadaLi) {
  let textoLi = li.innerText;
  console.log(textoLi);
}

console.log(`Hai ${textoCadaLi.length} elementos`);

let valorDataWidgetName =
  document.querySelectorAll("div")[1].dataset.widgetName;

console.log(`Valor: ${valorDataWidgetName}`);
