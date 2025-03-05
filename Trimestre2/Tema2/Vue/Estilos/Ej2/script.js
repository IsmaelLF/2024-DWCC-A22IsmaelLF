// 2. Crea unha páxina web que teña un taboleiro con dúas celas. Define unha clase CSS
// que vai ser usada para aplicar estilos ás celas. Por exemplo, crea unha clase
// chamada “activa” e configúraa cunha cor de fondo e un borde diferentes dos
// establecidos por defecto. Fai que ao pulsar sobre cada cela se alterne o estilo, é
// dicir, que se engada a clase CSS activa se non estaba asignada e viceversa.
// Fai unha segunda versión do mesmo exercicio, pero esta vez só unha das celas
// pode ter a clase CSS “activa”. Configura a páxina para que ao pulsar sobre a cela
// que non ten a clase “activa” se lle engada e se elimine da outra cela.

import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
<<<<<<< Updated upstream
      isActiveFirst: true,
      isActiveSecond: false,
      isActiveThird: true,
      isActiveFourth: false,
    };
  },
  methods: {
    toggleFirst() {
      this.isActiveFirst = !this.isActiveFirst;
    },
    toggleSecond() {
      this.isActiveSecond = !this.isActiveSecond;
    },
    toggleThird() {
      this.isActiveThird = !this.isActiveThird;
      if (this.isActiveThird) {
        this.isActiveFourth = false;
      }
    },
    toggleFourth() {
      this.isActiveFourth = !this.isActiveFourth;
      if (this.isActiveFourth) {
        this.isActiveThird = false;
      }
    },
=======
      isCellOneActive: true,
      isCellTwoActive: false,
    };
>>>>>>> Stashed changes
  },
}).mount("#app");
