import { createApp } from "vue";
import App from "./App.vue";
import Contact from "./components/Contact.vue";
import FormNovoContacto from "./components/FormNovoContacto.vue";
const app = createApp(App);
app.component("Contact", Contact);
app.component("FormNovoContacto", FormNovoContacto);
app.mount("#app");
