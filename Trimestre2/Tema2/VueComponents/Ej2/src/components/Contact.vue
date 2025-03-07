<script>
export default {
  data() {
    return {
      nome: "Ada Lovelace",
      telefono: "123456789",
      correo: "ada@lovelace.edu",
      isOculto: true,
    };
  },
  methods: {
    mostrarInfo() {
      this.isOculto = !this.isOculto;
    },
  },
  computed: {
    textoBoton() {
      return this.isOculto ? "Mostrar Información" : "Ocultar Información";
    },
  },
};
</script>
<template>
  <h3>{{ nome }}</h3>
  <button @click="mostrarInfo">{{ textoBoton }}</button>
  <div :class="{ oculto: isOculto }">
    <h4>{{ nome }}</h4>
    <h4>{{ telefono }}</h4>
    <h4>{{ correo }}</h4>
  </div>
</template>
<style>
.oculto {
  display: none;
}
</style>
