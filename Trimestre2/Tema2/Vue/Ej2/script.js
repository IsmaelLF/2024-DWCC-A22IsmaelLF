// 1. Crea unha páxina web cos seguintes elementos:
// a. Un botón que mostre unha mensaxe por consola ao ser pulsado co botón do
// medio.
// b. Unha caixa de texto onde ao pulsar calquera tecla se mostre todo o seu
// contido nun parágrafo da páxina HTML.
// Observar que se se usa o evento keydown prodúcese un atraso nun carácter,
// pois o evento lánzase ao pulsar a tecla e o valor da caixa de texto
// actualízase cando se solta a tecla (o evento keydown xa rematou).
// c. Unha caixa de texto tal que ao pulsar a tecla ENTER se mostre o seu contido
// nun novo parágrafo da páxina HTML. Ademais, fai que o contido da caixa de
// texto se borre despois de pulsar ENTER.
import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      texto: "",
      texto2: "",
    };
  },
  methods: {
    mostrarMensaxe() {
      console.log("Clicaches");
    },
    actualizarParagrafo(e) {
      this.texto = e.target.value;
    },
    mostrarParagrafoEnter(e) {
      this.texto2 = e.target.value;
      e.target.value = "";
    },
  },
}).mount("#app");
