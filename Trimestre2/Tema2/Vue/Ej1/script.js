import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      string: "Ola mundo!",
      int: 3,
      array: ["Ola", "Mundo"],
      object: { Ola: "Mundooo" },
      boolean: true,
    };
  },
}).mount("#app");
