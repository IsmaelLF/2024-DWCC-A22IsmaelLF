// a. Tanto a vida do monstro como a da persoa que xoga terá valores entre 0 -
// 100. É dicir, o valor de vida non pode ser un número negativo nin superar o
// valor 100. Debe comprobarse en todo momento que está no rango permitido.
// Para visualizalo de forma gráfica establecerase o valor correspondente na
// propiedade width de CSS no <div class=”healthbar__value”>.

// b. Cada vez que se pulsa o botón “Ataque” a vida do monstro diminúe, pero ao
// mesmo tempo este contraataca e a vida da persoa que está xogando tamén
// diminuirá. Para que o xogo non sexa preditivo, a vida do monstro diminuirá
// nun valor aleatorio entre 5 e 12 e a vida da persoa que xoga diminuirá nun
// valor aleatorio entre 8 e 15.

// c. Cada vez que se pulsa o botón “Ataque especial” a vida do monstro diminúe
// un número aleatorio entre 10 e 25. Igual que no caso anterior, o monstro
// contraataca e a vida da persoa que está xogando tamén diminuirá un número
// aleatorio entre 8 e 15 (igual que antes).

import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      vidaXogador: 100,
      vidaMonstro: 100,
      botonNovoXogoVisible: "none",
    };
  },
  methods: {
    ataqueNormal() {
      let quitarVidaMonstroAtaqueNormal = Math.floor(Math.random() * 8) + 5;
      let quitarVidaXogador = Math.floor(Math.random() * 8) + 8;
      this.vidaMonstro = Math.max(
        0,
        Math.min(100, this.vidaMonstro - quitarVidaMonstroAtaqueNormal)
      );
      this.vidaXogador = Math.max(
        0,
        Math.min(100, this.vidaXogador - quitarVidaXogador)
      );
    },
    ataqueEspecial() {
      let quitarVidaMonstroAtaqueNormal = Math.floor(Math.random() * 16) + 10;
      let quitarVidaXogador = Math.floor(Math.random() * 8) + 8;
    },
  },
  watch: {
    vidaXogador() {
      if (this.vidaXogador === 0 && this.vidaMonstro !== 0) {
        alert("O xogo terminou, o ganador foi Monstro");
      }
    },
    vidaMonstro() {
      if (this.vidaXogador !== 0 && this.vidaMonstro === 0) {
        alert("O xogo terminou, o ganador foi Xogador");
      }
    },
  },
}).mount("#game");
