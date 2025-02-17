// Crea unha páxina web con dúas caixas de texto para introducir números. A páxina
// web debe facer a suma dos dous números introducidos e mostrar o resultado. Cada
// vez que se modifique unha das caixas de texto, debe actualizarse e mostrarse o
// resultado da suma dos dous números. Ademais, unha vez obtido o resultado da
// suma, debe mostrarse tamén na páxina web información indicando se o resultado é
// un número par ou impar.
import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      num1: 0,
      num2: 0,
      suma: 0,
      numeroPar: "",
    };
  },
  methods: {
    calcularPar() {
      this.numeroPar = this.total % 2 === 0 ? "par" : "impar";
    },
  },
  watch: {
    num1() {
      this.suma = this.num1 + this.num2;
      this.calcularPar();
    },
    num2() {
      this.suma = this.num1 + this.num2;
      this.calcularPar();
    },
  },
}).mount("#app");
