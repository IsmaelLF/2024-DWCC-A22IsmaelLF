// Descarga o código fonte 03-propiedadesNodo02.html e mostra por consola:
// ● O número de ligazóns da páxina.
// ● A dirección da penúltima ligazón.
// ● O número de ligazóns que apuntan a http://proba
// ● O número de ligazóns do terceiro parágrafo.
// ● Modifica o estilo das ligazóns que apuntan a http://proba para que teñan o
// texto de cor laranxa.

let numeroLinks = document.querySelectorAll("a");

console.log(numeroLinks.length);

let penultimoLink = numeroLinks[5].href;

console.log(penultimoLink);
let conta = 0;
for (const linksProba of numeroLinks) {
  if (linksProba.href == "http://proba/") {
    // Ultimo ejercicio combinado aqui
    linksProba.style.color = "orange";
    conta += 1;
  }
}
console.log(conta);

let links3Parrafo = document
  .querySelectorAll("p")[2]
  .querySelectorAll("a").length;

console.log(links3Parrafo);
