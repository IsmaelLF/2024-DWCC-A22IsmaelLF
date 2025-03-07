<script>
export default {
  props: {
    nome: {
      type: String,
      required: true,
    },
    telefono: {
      type: Number,
      required: true,
    },
    correo: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
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
  <div>
    <h3>{{ nome }}</h3>
    <button @click="mostrarInfo">{{ textoBoton }}</button>
    <div :class="{ oculto: isOculto }">
      <h4>{{ nome }}</h4>
      <h4>{{ telefono }}</h4>
      <h4>{{ correo }}</h4>
    </div>
  </div>
</template>

<style>
.oculto {
  display: none;
}
</style>
