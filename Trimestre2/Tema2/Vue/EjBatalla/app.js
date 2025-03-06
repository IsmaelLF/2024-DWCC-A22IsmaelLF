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

// d. Cada vez que se pulsa un dos botóns “Ataque”, “Ataque especial” ou
// “Curación” realízase unha acción no xogo. Fai que o botón “Ataque
// especial” só estea habilitado unha vez de cada 3 accións realizadas.

// Ao pulsar o botón “Curación” a vida da persoa que xoga verase
// incrementada nun valor aleatorio entre 8 e 20 (hai que ter en conta de non
// superar o límite de 100). Ademais, cada vez que se use este botón, a vida da
// persoa que xoga tamén se verá diminuída nun número aleatorio entre 8 e 15
// (como se sufrise un ataque)

// h. Cando se pulsa o botón “Renderse” significa que a persoa que está xogando
// se rende, polo que a partida remata. Non hai que modificar o estado das
// vidas nin do monstro nin da persoa que xoga.
// i. Cando a partida remata, deben ocultarse os botóns “Ataque”, “Ataque
// especial”, “Curación” e “Renderse”.
// j. Mostra, a modo de rexistro, as accións realizadas na partida. A última acción
// realizada debe ser a primeira que apareza. Utiliza as clases CSS definidas
// para os estilos: log--player, log--monster, log--heal (curación) e
// log--damage (ataque).
import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      vidaXogador: 100,
      vidaMonstro: 100,
      botonNovoXogoVisible: "none",
      partidaGanada: "none",
      partidaPerdida: "none",
      partidaEmpatada: "none",
      numeroAccions: 0,
      history: [{}],
      botonsOcultos: "flex",
    };
  },
  methods: {
    ataqueNormal() {
      this.numeroAccions++;
      let vidaActualMonstro = this.vidaMonstro;
      let vidaActualXogador = this.vidaXogador;
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
      this.history.push({
        html: `<b><span class='log--player'>Xogador</span> ataca con <span class='log--damage'>${
          vidaActualMonstro - this.vidaMonstro
        } </span> </b>`,
      });
      this.history.push({
        html: `<b><span class="log--monster"> Monstro </span> ataca con <span class="log--damage">${
          vidaActualXogador - this.vidaXogador
        } </span> </b>`,
      });
      console.log(this.history);
    },
    ataqueEspecial() {
      this.numeroAccions++;
      let vidaActualMonstro = this.vidaMonstro;
      let vidaActualXogador = this.vidaXogador;
      let quitarVidaMonstroAtaqueEspecial = Math.floor(Math.random() * 16) + 10;
      let quitarVidaXogador = Math.floor(Math.random() * 8) + 8;

      this.vidaMonstro = Math.max(
        0,
        Math.min(100, this.vidaMonstro - quitarVidaMonstroAtaqueEspecial)
      );
      this.vidaXogador = Math.max(
        0,
        Math.min(100, this.vidaXogador - quitarVidaXogador)
      );
      this.history.push({
        html: `<b><span class='log--player'>Xogador</span> ataca con <span class='log--damage'>${
          vidaActualMonstro - this.vidaMonstro
        } </span> </b>`,
      });
      this.history.push({
        html: `<b><span class="log--monster"> Monstro </span> ataca con <span class="log--damage">${
          vidaActualXogador - this.vidaXogador
        } </span> </b>`,
      });
    },
    curacion() {
      this.numeroAccions++;

      let curacionVida = Math.floor(Math.random() * 13) + 8;
      let quitarVidaXogador = Math.floor(Math.random() * 8) + 8;

      this.vidaXogador = Math.max(
        0,
        Math.min(100, this.vidaXogador + curacionVida - quitarVidaXogador)
      );
      this.history.push({
        html: `<b><span class="log--player">Xogador </span> recupera <span class="log--heal">${
          curacionVida - quitarVidaXogador
        } </span> </b>`,
      });
    },
    reset() {
      this.history = [];
      this.vidaXogador = 100;
      this.vidaMonstro = 100;
      this.partidaGanada = "none";
      this.partidaPerdida = "none";
      this.partidaEmpatada = "none";
      this.botonNovoXogoVisible = "none";
      this.numeroAccions = 0;
      this.botonsOcultos = "flex";
    },
    rendirse() {
      this.partidaPerdida = "block";
      this.botonNovoXogoVisible = "inline-block";
      this.botonsOcultos = "none";
      setTimeout(() => {
        alert(
          `O xogo terminou por RENDICION, o ganador foi Monstro,  ${this.vidaMonstro}  fronte a  ${this.vidaXogador}`
        );
      }, 100);
    },
  },
  watch: {
    vidaXogador() {
      if (this.vidaXogador === 0 && this.vidaMonstro !== 0) {
        setTimeout(() => {
          alert(
            `O xogo terminou, o ganador foi Monstro,  ${this.vidaMonstro}  fronte a  ${this.vidaXogador}`
          );
        }, 100);
        this.partidaPerdida = "block";
        this.botonNovoXogoVisible = "inline-block";
        this.botonsOcultos = "none";
      } else if (this.vidaXogador !== 0 && this.vidaMonstro === 0) {
        setTimeout(() => {
          alert(
            `O xogo terminou, o ganador foi Xogador,  ${this.vidaXogador}  fronte a  ${this.vidaMonstro}`
          );
        }, 100);
        this.partidaGanada = "block";
        this.botonNovoXogoVisible = "inline-block";
        this.botonsOcultos = "none";
      } else if (this.vidaXogador === 0 && this.vidaMonstro === 0) {
        setTimeout(() => {
          alert(`O xogo rematou en empate`);
        }, 100);
        this.partidaEmpatada = "block";
        this.botonNovoXogoVisible = "inline-block";
        this.botonsOcultos = "none";
      }
    },
  },
  computed: {
    ataqueEspecialDisponible() {
      return this.numeroAccions > 0 && this.numeroAccions % 3 === 0;
    },
  },
}).mount("#game");
