"use strict";
let lis = document.getElementsByTagName("li");
let filtro = document.getElementById("filtro");
let input = document.getElementById("caixa");
let botonBorrarTodo = document.getElementById("borrar");
let ul = document.createElement("ul");

document.addEventListener("click", (e) => {
  // console.log(e.target);

  // Anadir elemento
  if (e.target.matches("#engadir")) {
    anadirElemento();
  }
  // Borrar todo
  if (e.target.matches("#borrar")) {
    borrarTodo();
  }
  if (e.target.closest("#botonModificar")) {
    actualizarElementos();
  }
  if (e.target.matches(".botonConfirmar")) {
    confirmarModificacion();
  }
});

// Funcion para actualizar
function actualizarElementos() {
  let inputModificar = document.createElement("input");
  inputModificar.setAttribute("type", "text");
  inputModificar.setAttribute("id", "inputModificar");
  Array.from(document.body.getElementsByTagName("li")).forEach((li) => {
    console.log(li.firstChild.textContent);
    inputModificar.value = li.firstChild.textContent;
    li.textContent = "";
    li.appendChild(inputModificar);
    let botonConfirmar = document.createElement("button");
    botonConfirmar.textContent = "✅";
    botonConfirmar.className = "botonConfirmar";
    li.appendChild(botonConfirmar);
  });
}
function confirmarModificacion() {
  let inputModificado = document.getElementById("inputModificar");
  let liModificado = inputModificado.closest("li");
  let botonX = document.getElementById("botonX");
  console.log(botonX);

  if (inputModificado.value !== "") {
    liModificado.textContent = inputModificado.value;

    liModificado.insertAdjacentElement("afterbegin", botonX);
    botonModificar.classList.add("oculto");
    // botonX.insertAdjacentElement("beforebegin", botonModificar);
  }
}

// Listener para filtrar en input
document.addEventListener("input", (e) => {
  if (e.target.matches("#filtro")) {
    filtrarElementos();
  }
});
// Funcion para anadir elemento a lista

function anadirElemento() {
  let botonModificar = document.createElement("button");
  let botonX = document.createElement("button");
  let li = document.createElement("li");
  botonModificar.className = "botonModificar";
  botonModificar.setAttribute("type", "button");
  botonModificar.setAttribute("id", "botonModificar");
  botonModificar.textContent = "✏️";
  botonX.setAttribute("type", "button");
  botonX.setAttribute("id", "botonX");
  botonX.className = "botonX";
  botonX.textContent = "❌";

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
    li.insertAdjacentElement("beforeend", botonModificar);
    li.appendChild(botonX);

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
}

// Funcion para borrar todo

function borrarTodo() {
  if (confirm("Queres borrar todos os elementos?")) {
    Array.from(lis).forEach((element) => {
      element.remove();
      filtro.value = "";
      localStorage.clear();
    });
    botonBorrarTodo.classList.add("oculto");
  }
}

// Funcion para filtrar
function filtrarElementos() {
  let filtroMinuscula = filtro.value.toLowerCase();
  Array.from(lis).forEach((element) => {
    let li = element.firstChild.textContent;
    if (li.includes(filtroMinuscula)) {
      element.style.display = "inline-flex";
    } else {
      element.style.display = "none";
    }
  });
}
