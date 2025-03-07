<script>
export default {
  data() {
    return {
      message: "Ola que tal ",
    };
  },
  methods: {
    toggleCaps() {
      if (this.message === this.message.toUpperCase()) {
        this.message = this.message.toLowerCase();
      } else {
        this.message = this.message.toUpperCase();
      }
    },
    engadirExclamacion() {
      this.message = `${this.message}!`;
    },
  },
};
</script>
<template>
  <h1>{{ message }}</h1>
  <button @click="toggleCaps">Cambiar formato</button>
  <button @click="engadirExclamacion">Engadir exlamacion</button>
  <div>
    <Contador />
  </div>
</template>
<style></style>
