import { createApp } from "vue";
import App from "./App.vue";
import Ventana from "./components/Ventana.vue";
const app = createApp(App);
app.component("Ventana", Ventana);
app.mount("#app");
