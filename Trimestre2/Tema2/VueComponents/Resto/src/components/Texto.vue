<script>
export default {
  data() {
    return {
      texto: "",
    };
  },
};
</script>
<template>
  <div>
    <h1>Texto</h1>
    <p>{{ texto }}</p>
    <input type="text" v-model="texto" />
  </div>
</template>
<style></style>
