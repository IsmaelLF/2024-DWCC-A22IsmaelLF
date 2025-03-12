<script>
import Ventana from "./components/Ventana.vue";
export default {
  components: {
    Ventana,
  },
  data() {
    return {
      ventanaAberta: false,
    };
  },
  methods: {
    openVentana() {
      this.ventanaAberta = true;
    },
    closeVentana() {
      this.ventanaAberta = false;
    },
  },
};
</script>
<template>
  <button @click="openVentana">Click</button>
  <Teleport to="body">
    <Ventana v-if="ventanaAberta">
      <template #header="{ message }">
        <h1>Not the default header</h1>
      </template>
      <template #default="{ message }">
        <p>Not the default main</p>
      </template>
      <template #footer="{ message }">
        <p>Not the default footer</p>
      </template>
      <template #button>
        <button @click="closeVentana">Cerrar</button>
      </template>
    </Ventana>
  </Teleport>
</template>
<style></style>
