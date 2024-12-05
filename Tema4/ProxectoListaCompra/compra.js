"use strict";
let lis = document.getElementsByTagName("li");
let filtro = document.getElementById("filtro");
let input = document.getElementById("caixa");
let botonBorrarTodo = document.getElementById("borrarTodo");
let ul = document.createElement("ul");

document.addEventListener("input", (e) => {
  if (e.target.matches("#filtro")) {
    filtrarElementos();
  }
});
document.addEventListener("click", (e) => {
  if (e.target.matches("#engadir")) {
    let botonModificar = document.createElement("button");
    let botonX = document.createElement("button");
    let li = document.createElement("li");
    botonModificar.setAttribute("type", "button");
    botonModificar.setAttribute("id", "botonModificar");
    botonModificar.textContent = "✏️";
    botonX.setAttribute("type", "button");
    botonX.setAttribute("id", "botonX");
    botonX.textContent = "❌";
    botonModificar.classList.add("botonModificar");
    botonX.classList.add("botonX");

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
      li.appendChild(botonModificar);
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
  if (e.target.matches("#botonX")) {
    let liCercano = e.target.closest("li");

    if (confirm("Queres borrar o elemento?")) {
      let localStorageLis = JSON.parse(localStorage.getItem("productos"));
      let filtroLis = localStorageLis.filter(
        (lis) => lis != liCercano.firstChild.textContent
      );
      liCercano.remove();

      localStorage.setItem("productos", JSON.stringify(filtroLis));
    }
  }
  if (e.target.matches("#borrarTodo")) {
    borrarTodo();
  }
  if (e.target.matches("#botonModificar")) {
    let li = e.target.closest("li");

    while (li.firstElementChild && li.firstElementChild.tagName !== "INPUT") {
      li.removeChild(li.firstElementChild);
    }
    let inputModificar = document.createElement("input");
    inputModificar.setAttribute("type", "text");
    inputModificar.setAttribute("id", "inputModificar");
    li.firstChild.textContent = inputModificar.value;
    li.appendChild(inputModificar);
    let botonConfirmar = document.createElement("button");
    botonConfirmar.textContent = "✅";
    botonConfirmar.className = "botonConfirmar";
    li.appendChild(botonConfirmar);
  }
  if (e.target.matches(".botonConfirmar")) {
    let li = e.target.closest("li");
    let valorInput = li.firstElementChild.value;
    if (valorInput != "") {
      li.firstChild.textContent = valorInput;
      while (li.children.length > 0) {
        li.removeChild(li.children[0]);
      }

      // Preguntar a Cristina se hai maneira de coller os botons xa existentes en vez de crealos de novo.
      let botonModificar = document.createElement("button");
      let botonX = document.createElement("button");
      botonModificar.setAttribute("type", "button");
      botonModificar.setAttribute("id", "botonModificar");
      botonModificar.textContent = "✏️";
      botonX.setAttribute("type", "button");
      botonX.setAttribute("id", "botonX");
      botonX.textContent = "❌";
      botonModificar.classList.add("botonModificar");
      botonX.classList.add("botonX");
      li.appendChild(botonModificar);
      li.appendChild(botonX);
      let arrayProductos = [];
      for (const element of lis) {
        arrayProductos.push(element.firstChild.textContent);
      }

      localStorage.setItem("productos", JSON.stringify(arrayProductos));
    }
  }
});

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
