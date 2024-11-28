// Crea unha páxina web que teña unha caixa de texto, un botón e unha lista. Fai que
// ao pulsar o botón se engada o texto da caixa de texto como novo elemento da lista.
// Inicialmente, a páxina debería mostrar algo similar á seguinte imaxe:

let input = document.getElementById("inputTexto");
let boton = document.getElementById("engadir");
let lista = document.getElementById("lista");

boton.addEventListener("click", () => {
  let inputValue = input.value;
  if (inputValue !== "") {
    let li = document.createElement("li");
    li.textContent = inputValue;
    lista.appendChild(li);
  }
});
