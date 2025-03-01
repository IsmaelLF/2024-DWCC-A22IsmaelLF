// 2. Dado un array de números almacenado en JavaScript, utiliza a directiva v-for para
// mostrar só os números pares.
import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
  methods: {},
  computed: {
    numerosPares() {
      return this.numeros.filter((numero) => numero % 2 === 0);
    },
  },
}).mount("#app");
