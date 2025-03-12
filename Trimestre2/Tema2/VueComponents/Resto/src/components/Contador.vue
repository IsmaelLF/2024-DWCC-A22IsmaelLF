<script>
export default {
  data() {
    return {
      contador: 0,
    };
  },
  methods: {
    incrementar() {
      this.contador++;
    },
  },
};
</script>
<template>
  <div>
    <h1>Contador</h1>
    <p>{{ contador }}</p>
    <button @click="incrementar">Incrementar</button>
  </div>
</template>
<style></style>
