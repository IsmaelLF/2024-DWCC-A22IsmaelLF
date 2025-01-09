// Implementa unha función escribirNumeros(desde, ata) que xere un número cada
// segundo, comezando en “desde” e rematando en “ata”. Fai dúas variantes da
// función: unha usando setInterval e outra usando setTimeout.

function escribirNumeros(d, a) {
  function numerosTimeout() {
    if (d <= a) {
      console.log(d++);
      setTimeout(numerosTimeout, 1000);
    }
  }
  numerosTimeout();
}
// escribirNumeros(2, 7);

function escribirNumeros2(d, a) {
  function numerosInterval() {
    if (d <= a) {
      console.log(d++);
    }
  }
  setInterval(numerosInterval, 1000);
}
// escribirNumeros2(5, 23);

// 2. Crea unha páxina web con un título <h1> e dous botóns. Un dos botóns debe iniciar
// un intervalo que cambie alternativamente cada segundo a cor do título <h1>
// alternando entre dúas cores, as que escollas. O outro botón debe deter o intervalo e
// parar o cambio de cores.

let h1 = document.createElement("h1");
h1.textContent = "Cambio";
let botonStart = document.createElement("button");
botonStart.textContent = "Start";
let botonStop = document.createElement("button");
botonStop.textContent = "Stop";
document.body.appendChild(h1);
document.body.appendChild(botonStart);
document.body.appendChild(botonStop);

let timerId;
function cambiarColor() {
  timerId = setInterval(() => {
    h1.className = h1.className === "start" ? "stop" : "start";
  }, 1000);
}
botonStart.addEventListener("click", cambiarColor);
botonStop.addEventListener("click", () => {
  clearInterval(timerId);
  timerId = null;
});

// 3. Busca unha imaxe grande en internet para probar que tarda tempo en descargarse.
// Carga esa imaxe remota dende JavaScript. Cando a imaxe estea cargada, mostra
// unha mensaxe en consola.
// NOTA: se fas varias probas coa mesma imaxe, a primeira vez descargarase. Sen
// embargo, a segunda vez que se cargue a imaxe, esta xa estará en caché

let img = document.createElement("img");
document.body.appendChild(img);
img.width = "3840";
img.height = "2160";
img.src = "https://images8.alphacoders.com/115/thumb-1920-1156488.png";
img.addEventListener("load", console.log("Cargouse"));
