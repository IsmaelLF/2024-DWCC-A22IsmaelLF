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
  <div id="app">
    <button @click="openVentana">Click</button>
    <Ventana v-if="ventanaAberta" @close="closeVentana">
      <template #header="{ message }">
        <h1>{{ message }}</h1>
      </template>
      <template #default="{ message }">
        <p>{{ message }}</p>
      </template>
      <template #footer="{ message }">
        <button>{{ message }}</button>
      </template>
    </Ventana>
  </div>
</template>
<style></style>
