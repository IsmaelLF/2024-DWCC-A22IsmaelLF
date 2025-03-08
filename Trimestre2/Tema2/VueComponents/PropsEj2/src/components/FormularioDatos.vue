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
    return {
      nome: this.nomePersoa,
      ano: this.anoNacemento,
    };
  },
  methods: {
    editarDatos() {
      this.$emit("update", this.nome, Number(this.ano));
    },
  },
};
</script>
<template>
  <div>
    <form>
      <label for="nome"> Nome </label>
      <input type="text" v-model="nome" name="nome" />
      <br /><br />
      <label for="ano">Ano Nacemento </label>
      <input type="number" name="ano" v-model="ano" />
      <button @click.prevent="editarDatos">✏️</button>
    </form>
  </div>
</template>
<style>
button {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}
</style>
