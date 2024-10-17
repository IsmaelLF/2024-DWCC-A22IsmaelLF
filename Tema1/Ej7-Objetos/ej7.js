// 1. Crea un obxecto chamado television coas propiedades marca, categoría
// (televisores), unidades (4), prezo (354.99) e un método chamado importe que
// devolva o prezo total das unidades (unidades x prezo).

const television = {
  marca: "LG",
  categoria: "Televisores",
  unidades: 4,
  prezo: 354.99,
};

const importe = (producto) => {
  console.log(
    `Prezo do producto: ${(producto.unidades * producto.prezo).toFixed(2)}€`
  );
};
importe(television);
// 2. Imaxinar que se recolle a seguinte información relativa a un xogo dun servidor:
const game = {
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
let {
  odds: { team1, x: draw, team2 },
} = game;

console.log(team1);
console.log(draw);
console.log(team2);

// Utilizando a desestruturación de obxectos crea as seguintes variables:
// ● team1: debe inicializarse co valor da propiedade team1 do obxecto inicial.
// ● draw: debe inicializarse co valor da propiedade x do obxecto inicial.
// ● team2: debe inicializarse co valor da propiedade team2 do obxecto inicial.
// 3. Dado o seguinte obxecto:
const game2 = {
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
};
// a. Recorre o array game.scored e mostra por pantalla información do xogador
// que marcou e o número de gol marcado. Exemplo: “Gol 1: Lewandowski”.
let gol = 0;
for (const goal of game2.scored) {
  gol++;
  console.log(`Gol ${gol}: ${goal}`);
}

// b. Crea un novo obxecto chamado scorers que conteña como propiedades o
// nome dos xogadores que marcaron e como valor o número de goles que
// marcaron respectivamente. Neste exemplo sería algo así: {Lewandowski: 2,
// Gnarby: 1, Hummels: 1}

const scorers = { Lewandowski: 2, Gnabry: 1, Hummels: 1 };
console.log(scorers);
