"use strict";
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
  boton.textContent = "❌";
  if (input.value !== "") {
    li.textContent = input.value;
    let duplicado = false;
    Array.from(lis).forEach((element) => {
      if (element.firstChild.textContent === li.textContent) {
        duplicado = true;
      }
    });
    if (duplicado) {
      alert("Xa existe este elemento");
      input.value = "";
      return;
    }

    contedor.appendChild(ul);
    ul.appendChild(li);
    li.appendChild(boton);

    let arrayProductos = [];
    for (const element of lis) {
      arrayProductos.push(element.firstChild.textContent);
    }

    localStorage.setItem("productos", JSON.stringify(arrayProductos));

    input.value = "";

    if (lis.length > 0) {
      botonBorrarTodo.classList.remove("oculto");
    }
  }
  // Listener para actualizar

  const liClickHandler = () => {
    let botonModificar = document.createElement("button");
    botonModificar.setAttribute("type", "button");
    botonModificar.textContent = "✏️";
    botonModificar.style.color = "green";
    boton.insertAdjacentElement("beforebegin", botonModificar);

    botonModificar.addEventListener("click", () => {
      li.removeEventListener("click", liClickHandler);
      botonModificar.classList.add("oculto");
      let inputModificar = document.createElement("input");
      inputModificar.setAttribute("type", "text");

      inputModificar.value = li.firstChild.textContent;
      li.textContent = "";
      li.appendChild(inputModificar);

      let botonConfirmar = document.createElement("button");
      botonConfirmar.textContent = "✅";
      li.appendChild(botonConfirmar);

      // TODO: Poder volver a ter boton de modificar. Tense que actualizar no localStorage tamén. Posibilidad de facelo no mismo li sin crear outro(?)
      botonConfirmar.addEventListener("click", () => {
        if (inputModificar.value !== "") {
          li.remove();
          let novoLi = document.createElement("li");
          novoLi.textContent = inputModificar.value;
          ul.appendChild(novoLi);
          novoLi.appendChild(botonModificar);
          novoLi.appendChild(boton);
        }
      });
    });
  };

  li.addEventListener("click", liClickHandler);

  // Listener para borrar elemento da lista
  boton.addEventListener("click", () => {
    if (confirm("Queres eliminar este elemento?")) {
      let productosArrayParseados = JSON.parse(
        localStorage.getItem("productos")
      );

      productosArrayParseados = productosArrayParseados.filter(
        (element) => element !== li.firstChild.textContent
      );
      localStorage.setItem("productos", productosArrayParseados);

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
      localStorage.clear();
    });
    botonBorrarTodo.classList.add("oculto");
  }
});

// Listener para filtrar

filtro.addEventListener("input", () => {
  let filtroMinuscula = filtro.value.toLowerCase();
  Array.from(lis).forEach((element) => {
    let li = element.firstChild.textContent;
    if (li.includes(filtroMinuscula)) {
      element.style.display = "inline-flex";
    } else {
      element.style.display = "none";
    }
  });
});
