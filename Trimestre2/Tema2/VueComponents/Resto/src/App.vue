<script>
import Contador from "./components/Contador.vue";
import Texto from "./components/Texto.vue";
export default {
  components: {
    Contador,
    Texto,
  },
  data() {
    return {
      toggleTab: true,
    };
  },
  methods: {
    toggle() {
      this.toggleTab = !this.toggleTab;
    },
  },
  computed: {
    currentTab() {
      return this.toggleTab ? "Contador" : "Texto";
    },
  },
};
</script>
<template>
  <button type="radio" @click="toggle">Cambiar</button>
  <KeepAlive>
    <component :is="currentTab" />
  </KeepAlive>
</template>
<style></style>
