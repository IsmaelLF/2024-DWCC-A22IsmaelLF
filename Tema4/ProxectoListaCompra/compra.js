let input = document.getElementById("caixa");
let contedor = document.getElementById("contedor");
let botonEngadir = document.getElementById("engadir");
let botonBorrarTodo = document.getElementById("borrar");
let lis = document.querySelectorAll("li");
botonEngadir.addEventListener("click", () => {
  let ul = document.createElement("ul");
  let li = document.createElement("li");
  let boton = document.createElement("button");
  boton.setAttribute("type", "button");
  boton.className = "botonX";
  let inputValue = input.value;

  // Pedir axuda a Cristina para resetear o valor do input
  boton.textContent = "x";
  if (inputValue !== "") {
    li.textContent = inputValue;
    ul.appendChild(li);
    contedor.appendChild(ul);
    li.appendChild(boton);
  }
  boton.addEventListener("click", () => {
    if (confirm("Esta seguro de querer eliminar?")) {
      li.parentNode.removeChild(li);
    }
  });
});
