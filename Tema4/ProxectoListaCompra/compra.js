let input = document.getElementById("caixa");
let contedor = document.getElementById("contedor");
let botonEngadir = document.getElementById("engadir");
let botonBorrarTodo = document.getElementById("borrar");
let lis = document.getElementsByTagName("li");
let ul = document.createElement("ul");
let filtro = document.getElementById("filtro");

// Listener para engadir elemento a lista
botonEngadir.addEventListener("click", () => {
  let li = document.createElement("li");
  let boton = document.createElement("button");
  boton.setAttribute("type", "button");
  boton.className = "botonX";

  boton.textContent = "x";
  if (input.value !== "") {
    li.textContent = input.value;

    contedor.appendChild(ul);
    ul.appendChild(li);

    li.appendChild(boton);
    input.value = "";

    if (lis.length > 0) {
      botonBorrarTodo.classList.remove("oculto");
    }
  }
  // Listener para borrar elemento da lista
  boton.addEventListener("click", () => {
    if (confirm("Queres eliminar este elemento?")) {
      li.remove();

      if (lis.length < 1) {
        botonBorrarTodo.classList.add("oculto");
      }
    }
  });
});

// Listener para borrar todo

botonBorrarTodo.addEventListener("click", () => {
  if (confirm("Queres borrar todos os elementos?")) {
    Array.from(lis).forEach((element) => {
      element.remove();
      filtro.value = "";
    });
    botonBorrarTodo.classList.add("oculto");
  }
});

// Listener para filtrar

filtro.addEventListener("input", () => {
  let filtroMinuscula = filtro.value.toLowerCase();
  Array.from(lis).forEach((element) => {
    let li = element.textContent.slice(0, -1).toLowerCase();

    if (li.includes(filtroMinuscula)) {
      element.style.display = "inline-flex";
    } else {
      element.style.display = " none";
    }
  });
});
