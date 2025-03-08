<script>
export default {
  props: {
    nomePersoa: String,
    anoNacemento: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
<template>
  <div>
    <h2>{{ nomePersoa }}</h2>
    <h3>{{ anoNacemento }}</h3>
  </div>
</template>
<style></style>
