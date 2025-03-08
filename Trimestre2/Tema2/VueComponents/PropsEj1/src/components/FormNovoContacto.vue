<script>
export default {
  data() {
    return {
      inputName: "",
      inputTel: "",
      inputMail: "",
    };
  },
};
</script>
<template>
  <form>
    <h3>Engadir novo contacto</h3>
    <label for="inputName">Nome </label>
    <input type="text" name="inputName" v-model="inputName" />
    <br />
    <br />
    <label for="inputTel">Telefono </label>
    <input type="tel" name="inputTel" v-model="inputTel" />
    <br /><br />
    <label for="inputMail">Correo </label>
    <input type="email" name="inputMail" v-model="inputMail" />
    <br /><br />
    <button
      @click.prevent="
        this.$emit('addContacto', {
          nome: this.inputName,
          telefono: Number(this.inputTel),
          correo: this.inputMail,
        });
        this.inputName = '';
        this.inputTel = '';
        this.inputMail = '';
      "
    >
      Engadir
    </button>
  </form>
</template>
<style></style>
