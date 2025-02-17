// Crea unha páxina web con dúas caixas de texto que permitan converter valores de
// kilómetros a metros automaticamente. Cada vez que se escriba en calquera das
// dúas caixas de texto, mostraranse automaticamente a unidade equivalente na outra
// caixa.

import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      num1: 0,
      num2: 0,
    };
  },
  methods: {},
  watch: {
    num1() {
      this.num2 = this.num1 * 1000;
    },
    num2() {
      this.num1 = this.num2 / 1000;
    },
  },
}).mount("#app");
