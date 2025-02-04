// Crea unha páxina web que conteña un elemento <div> con un tamaño
// preestablecido.
// Cando se pulse no div, este debe ser substituído por un textarea inicializado co texto
// que había no <div> e co mesmo tamaño que o <div>.
// O elemento textarea debe permitir editar o texto e cando se pulse a tecla “Enter” ou
// perda o foco, o textarea debe substituírse polo div, establecendo o contido deste ao
// texto que había na textarea. É dicir, ao pulsar o div, o seu texto convértese en
// editable.
let div = document.getElementById("div1");
let textArea = document.createElement("textarea");

document.addEventListener("click", (e) => {
  if (e.target.matches("#div1")) {
    textArea.classList.add("textArea");
    textArea.style.height = div.style.height;
    textArea.style.width = div.style.width;
    div.classList.add("oculto");
    document.body.appendChild(textArea);
    textArea.textContent = div.textContent;

    textArea.addEventListener("input", (e) => {
      textArea.textContent = textArea.textContent + e.data;
    });
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Enter" && e.target.matches(".textArea")) {
    textArea.classList.add("oculto");
    div.classList.remove("oculto");
    div.textContent = textArea.textContent;
  }
});

textArea.addEventListener("focusout", (e) => {
  textArea.classList.add("oculto");
  div.classList.remove("oculto");
  div.textContent = textArea.textContent;
});
