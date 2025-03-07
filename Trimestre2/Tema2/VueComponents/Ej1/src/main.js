import { createApp } from "vue";
import App from "./App.vue";
import Contador from "./components/Contador.vue";

const app = createApp(App);
app.component("Contador", Contador);
app.mount("#app");
