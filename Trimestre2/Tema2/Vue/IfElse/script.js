// Crea dende JavaScript un array con tarefas, que poden ser inicialmente un array de
// cadeas de texto. Para practicar o renderizado condicional crea unha páxina web que
// mostre un parágrafo “Non hai tarefas pendentes” se o array coa lista de tarefas está
// baleiro ou que mostre “Hai X tarefas pendentes”, sendo X o número de tarefas no
// array.

import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      tarefas: ["Tender roupa", "Lavar platos", "Barrer"],
    };
  },
  methods: {
    toggle() {
      this.tarefas = [];
    },
  },
}).mount("#app");
