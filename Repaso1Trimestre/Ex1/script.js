// Crea unha páxina web que teña un div de tamaño 100x100 e cor de fondo (a que
//     queiras). Engade dous campos numéricos con valores entre 0 e 1000 que
//     representarán o alto e ancho do div. Cada vez que se cambie o valor dos campos,
//     debe redimensionarse o div cos valores indicados.

let div = document.getElementById("div1");

document.addEventListener("input", (e) => {
  if (e.target.matches("#inpHeight")) {
    div.style.height = `${e.target.value}px`;
  }
  if (e.target.matches("#inpWidth")) {
    div.style.width = `${e.target.value}px`;
  }
});
